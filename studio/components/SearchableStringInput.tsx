import { Box, Button, Card, Flex, Text } from '@sanity/ui'
import { Autocomplete } from '@sanity/ui/autocomplete'
import { set, unset, type StringInputProps } from 'sanity'

interface ListOption {
  title: string
  value: string
}

// Loose match for typed searches: ignores case, Arabic diacritics and Arabic/Urdu letter variants
const normalize = (text: string) =>
  text
    .normalize('NFC')
    .replace(/[ً-ٰٟـ]/g, '')
    .replace(/[يى]/g, 'ی')
    .replace(/ك/g, 'ک')
    .toLowerCase()

/**
 * Replaces the plain dropdown of a string field that has `options.list` with a box you can type
 * into to search the list (used for mohalla and khandan, which have long lists).
 */
export function SearchableStringInput(props: StringInputProps) {
  const { value, onChange, schemaType, elementProps, readOnly } = props
  const list = ((schemaType.options?.list || []) as (ListOption | string)[]).map((item) =>
    typeof item === 'string' ? { title: item, value: item } : item
  )
  const titleOf = (v?: string) => list.find((o) => o.value === v)?.title || v || ''

  return (
    <Flex gap={2} align="center">
      <Box flex={1}>
        <Autocomplete
          id={elementProps.id}
          ref={elementProps.ref}
          onBlur={elementProps.onBlur}
          onFocus={elementProps.onFocus}
          readOnly={readOnly}
          openButton
          placeholder="Type to search… / تلاش کریں"
          options={list.map((o) => ({ value: o.value }))}
          value={value || ''}
          filterOption={(query, option) => normalize(titleOf(option.value)).includes(normalize(query))}
          renderOption={(option) => (
            <Card as="button" padding={3}>
              <Text size={1}>{titleOf(option.value)}</Text>
            </Card>
          )}
          renderValue={(v) => titleOf(v)}
          onChange={(next) => onChange(next ? set(next) : unset())}
        />
      </Box>
      {value && !readOnly && (
        <Button mode="bleed" text="Clear" onClick={() => onChange(unset())} />
      )}
    </Flex>
  )
}

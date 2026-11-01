import AppKit
// stack.swift out.jpg in1.jpg in2.jpg ... : stacks images vertically
let args = CommandLine.arguments
let out = args[1]
let imgs = args.dropFirst(2).compactMap { NSImage(contentsOfFile: $0) }
let reps = imgs.compactMap { $0.representations.first as? NSBitmapImageRep }
let w = reps.map { $0.pixelsWide }.max() ?? 0
let h = reps.map { $0.pixelsHigh }.reduce(0, +)
let rep = NSBitmapImageRep(bitmapDataPlanes: nil, pixelsWide: w, pixelsHigh: h, bitsPerSample: 8, samplesPerPixel: 4, hasAlpha: true, isPlanar: false, colorSpaceName: .deviceRGB, bytesPerRow: 0, bitsPerPixel: 0)!
NSGraphicsContext.saveGraphicsState()
NSGraphicsContext.current = NSGraphicsContext(bitmapImageRep: rep)
NSColor.white.setFill(); NSRect(x: 0, y: 0, width: w, height: h).fill()
var y = h
for r in reps { y -= r.pixelsHigh; r.draw(in: NSRect(x: 0, y: y, width: r.pixelsWide, height: r.pixelsHigh)) }
NSGraphicsContext.restoreGraphicsState()
try! rep.representation(using: .jpeg, properties: [.compressionFactor: 0.85])!.write(to: URL(fileURLWithPath: out))

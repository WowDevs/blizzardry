# Blizzardry

Ruby library for mastering the wizardry that is [Blizzard](http://blizzard.com)'s game files.

**Supported Ruby versions: 1.9.3 or higher**

Licensed under the **MIT** license, see LICENSE for more information.


## Installation

Blizzardry will soon be available from RubyGems.


## Usage

### [BLP](lib/blizzardry/blp.rb)

```ruby
Blizzardry::BLP.open('image.blp') do |blp|
  blp.width     # 512 (mipmap 0)
  blp.height    # 512
  blp.width(4)  # 32 (mipmap 4)
  blp.data      # "\x10\x18\x18\xFF\x10\x18\x18\xFF\x10\x18..."
  blp.pixels    # [270014719, 270014719, 270014719, 691026431, 876365823, ...]
end

# Or alternatively:

blp = Blizzardry::BLP.open('image.blp')
# ...
blp.close
```

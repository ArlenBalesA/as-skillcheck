# Asgard Scripts
- discord : https://discord.gg/wDCeJqp6ea
- tebex : https://asgardrp.tebex.io/
- github: https://github.com/ArlenBalesA

- preview: https://i.imgur.com/yMNG1yj.png

# Asgard Skill Check by ArlenBales
Simple skill check for RedM, inspired by NoPixel. Credits to MaximilianAdF (https://github.com/MaximilianAdF/NoPixel-skillChecks-4.0) for initial UI work. Reworked and redesigned for a more Red Dead feel and to match my other UI elements. Added client sided calls to use as a skill check.

# Dependancies
- None/Standalone

# Installation
- Drag and drop into your resources, make sure it is started

# Usage
    local skillCheck = exports["as-skillcheck"]:skillCheck()
    if not skillCheck then 
        --When the user loses the skillcheck
    else
        --Whatever you want to happen when the user successfully completes skill check
    end
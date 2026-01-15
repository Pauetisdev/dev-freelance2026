#!/usr/bin/env python3
"""
Script to remove all emojis from posts.ts
Preserves all text, just removes the emoji characters
"""

import re

def remove_emojis_from_file(filename):
    # Read the file
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Define emoji patterns to remove
    # These are common emojis found in the blog posts
    emojis_to_remove = [
        '🔑', '💡', '📊', '⚡', '🔄', '🎯', '💰', '🛡️', '✅', '🚨',
        '📚', '📋', '💼', '🌍', '🏢', '📝', '🤔', '⚠️', '📱', '🔍',
        '💪', '🖥️', '❌'
    ]
    
    # Create regex pattern
    emoji_pattern = '|'.join(map(re.escape, emojis_to_remove))
    
    # Remove emojis - keep one space if emoji had spaces around it
    # This pattern removes emoji and any immediately following space
    content_cleaned = re.sub(f'({emoji_pattern})\\s?', '', content)
    
    # Write back
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content_cleaned)
    
    print(f"✨ Emojis removed from {filename}")
    
    # Count removals
    removed_count = content.count('💡') + content.count('🔑') + content.count('📊') + \
                   content.count('⚡') + content.count('🔄') + content.count('🎯') + \
                   content.count('💰') + content.count('🛡️') + content.count('✅') + \
                   content.count('❌') + content.count('🚨') + content.count('📚') + \
                   content.count('📋') + content.count('💼') + content.count('🌍') + \
                   content.count('🏢') + content.count('📝') + content.count('🤔') + \
                   content.count('⚠️') + content.count('📱') + content.count('🔍') + \
                   content.count('💪') + content.count('🖥️')
    
    print(f"📈 Total emojis removed: approximately {removed_count}")

if __name__ == "__main__":
    remove_emojis_from_file("src/data/posts.ts")

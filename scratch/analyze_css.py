import re

css_path = r"c:\Users\CharishmaReddy\nurturehive-ui\Hive\src\app\globals.css"

with open(css_path, "r", encoding="utf-8") as f:
    content = f.read()

# We want to find CSS rules. A simple parser:
# We look for blocks of the form: selector { properties }
# Let's find all occurrences of selectors containing our keywords

keywords = ["#systems", "#outcomes", "#comparison", "#infrastructure", "#framework", ".modern-problem"]
targets = ["margin", "padding"]

# Let's tokenize blocks roughly by matching braces
# Note: we need to handle nested braces (e.g., media queries)
# Let's do a simple brace matcher

blocks = []
current_selectors = ""
current_properties = ""
brace_level = 0
in_selector = True
start_idx = 0

# Let's iterate through the file to extract blocks
for idx, char in enumerate(content):
    if char == '{':
        if brace_level == 0:
            current_selectors = content[start_idx:idx].strip()
            start_idx = idx + 1
        brace_level += 1
    elif char == '}':
        brace_level -= 1
        if brace_level == 0:
            current_properties = content[start_idx:idx].strip()
            # Save the block
            blocks.append((current_selectors, current_properties))
            start_idx = idx + 1

# Now filter blocks where selectors match our keywords and properties contain margin/padding
matched_rules = []
for selector, properties in blocks:
    # Clean selector (remove media query declarations if any)
    # e.g., @media ... { selector
    clean_selector = selector
    if "@media" in selector:
        # Just keep the part after the media query brace
        parts = selector.split("{")
        if len(parts) > 1:
            clean_selector = parts[-1].strip()
    
    # Check if any keyword matches
    has_keyword = any(kw in clean_selector for kw in keywords)
    if not has_keyword:
        continue
        
    # Check if properties contain any target
    has_target = any(t in properties for t in targets)
    if not has_target:
        continue
        
    matched_rules.append((selector, properties))

# Print results
print(f"Found {len(matched_rules)} matching CSS rules:")
for sel, prop in matched_rules:
    print("-" * 60)
    print(f"Selector: {sel}")
    print("Properties:")
    for line in prop.split("\n"):
        if any(t in line for t in targets):
            print(f"  {line.strip()}")

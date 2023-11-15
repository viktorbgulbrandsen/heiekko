def parse_flashcards(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        lines = file.readlines()

    flashcards = []
    for line in lines:
        if '<img' not in line:  # Skip entries with images
            parts = line.strip().split('\t')  # Splitting each line by tab
            if len(parts) >= 2:
                # Creating a dictionary with 'question' and 'answer'
                flashcard = {
                    'question': parts[0].replace('<br>', '').strip('\"'),
                    'answer': parts[1].replace('<br>', '').strip('\"')
                }
                flashcards.append(flashcard)

    return flashcards


# Path to the file
file_path = 'server\data\Endocrinology.txt'

# Parsing the flashcards from the file
parsed_flashcards = parse_flashcards(file_path)
print(parsed_flashcards)
# You can then use 'parsed_flashcards' as needed
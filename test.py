import re

grouped_entity_origin = [
            "[[173: February 6-10, 2009]] (via AutoSub)",
            "[[434: Bill Cooper Covers OKC Part 1]] (via AutoSub)"
        ]

def findnumber(array):
    for items in array:
        #find_number = re.match(r'\[\[\d: ', items).group(1)
        isolate_episode_string = re.match('\[\[(.*?): ', items).group(0)
        episodenumber = re.findall(r'\d+', isolate_episode_string)
        print(('').join(episodenumber))
        #print(find_number)

findnumber(grouped_entity_origin)
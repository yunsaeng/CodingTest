function solution(message, spoiler_ranges) {
    // 단어 정보 추출
    const words = [];
    const regex = /[a-z0-9]+/g;
    let match;
    
    while ((match = regex.exec(message)) !== null) {
        words.push({
            word: match[0],
            start: match.index,
            end: match.index + match[0].length - 1
        })
    }
    
    // 스포일러 여부 판단
    const isSpoilered = (wordStart, wordEnd) => {
        return spoiler_ranges.some(([start, end]) =>
            !(wordEnd < start || wordStart > end)
        );
    }
    
    // 비스포일러 단어 추출
    const nonSpoilerWords = new Set(
        words
        .filter((word) => !isSpoilered(word.start, word.end))
        .map((word) => word.word)
    );
    
    // 단어 세기
    const revealedWords = new Set();
    let count = 0;
    
    for(const [start, end] of spoiler_ranges) {
        const seen = new Set();
        
        for(const word of words) {
            if(word.start <= end && word.end >= start) {
                if(!seen.has(word.word)) {
                    seen.add(word.word);
                    
                    if(!revealedWords.has(word.word) &&
                       !nonSpoilerWords.has(word.word)) {
                        count++;
                        revealedWords.add(word.word);
                    }
                }
            }
        }
    }
    
    return count;
}
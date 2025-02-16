function solution(participant, completion) {
  const participantSet = {};

  for (const p of participant) {
    if (!participantSet[p]) participantSet[p] = 1;
    else participantSet[p]++;
  }

  for (const c of completion) {
    participantSet[c]--;
    if (participantSet[c] <= 0) delete participantSet[c];
  }

  return Object.keys(participantSet).join("");
}

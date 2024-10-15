function translateSecond(time) {
  return (
    (Number(time[0]) * 10 + Number(time[1])) * 60 +
    Number(time[3]) * 10 +
    Number(time[4])
  );
}

function solution(video_len, pos, op_start, op_end, commands) {
  const s_video_len = translateSecond(video_len);
  const s_op_start = translateSecond(op_start);
  const s_op_end = translateSecond(op_end);
  let s_pos = translateSecond(pos);

  for (let i = 0; i < commands.length; i++) {
    if (s_pos < 0) {
      s_pos = 0;
    }
    if (s_pos > s_video_len) {
      s_pos = s_video_len;
    }
    if (s_pos >= s_op_start && s_pos <= s_op_end) {
      s_pos = s_op_end;
    }

    if (commands[i] === "next") {
      s_pos += 10;
    } else {
      s_pos -= 10;
    }
  }

  if (s_pos < 0) {
    s_pos = 0;
  }
  if (s_pos > s_video_len) {
    s_pos = s_video_len;
  }
  if (s_pos >= s_op_start && s_pos <= s_op_end) {
    s_pos = s_op_end;
  }

  let answer = "";

  const minutes = Math.floor(s_pos / 60).toString();
  if (minutes.length === 1) {
    answer += "0";
  }
  answer += minutes;

  answer += ":";

  const seconds = (s_pos % 60).toString();
  if (seconds.length === 1) {
    answer += "0";
  }
  answer += seconds;

  return answer;
}

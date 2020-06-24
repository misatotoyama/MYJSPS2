'use strict';

{
    // const score1 = 80;
    // const score2 = 90;z
    // const score3 = 40;

    const scores1 = [80, 90, 40];
    console.log(scores1);
}

{
    const scores2 = [80, 90, 40];
    // console.log(scores2[1]);

    scores2[2] = 44;
    console.log(scores2);

    console.log(scores2.length);
}

{
    const scores = [80, 90, 40, 70];

    // console.log(`Score: ${scores[0]}`);
    // console.log(`Score: ${scores[1]}`);
    // console.log(`Score: ${scores[2]}`);

    for (let i = 0; i < scores.length; i++){
        console.log(`Score ${i}: ${scores[i]}`);
    }
}
{
    const scores = [80, 90, 40, 70];
    scores.push(60, 50);
    scores.shift();

    
    for (let i = 0; i < scores.length; i++){
        console.log(`Score ${i}: ${scores[i]}`);
    }
}
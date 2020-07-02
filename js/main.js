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
{
    const scores = [80, 90, 40, 70];
    scores.splice(1, 0, 30, 50);

    for (let i = 0; i < scores.length; i++){
        console.log(`Score ${i}: ${scores[i]}`);
    }
}
{
    const otherScores = [10, 20, 30];
    const scores =[80, 90, 40, 70, ...otherScores];
    // console.log(scores);

    function sum(a, b, c){
        console.log(a + b + c);
    }

    sum(...otherScores);
}
{
    const scores = [80, 90, 40, 70];

    const [a, b, c, d] = scores;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}
{
    const scores = [800, 900, 400, 700];

    const [a, b, ...others] = scores;
    console.log(a);
    console.log(b);
    console.log(others);
}
{
    const scores = [80, 90, 40, 70];

    scores.forEach((score, index) =>{
        console.log(`Score:  ${index}; ${score}`);
    });
}

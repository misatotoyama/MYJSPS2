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

    for (let i = 0; i < scores.length; i++) {
        console.log(`Score ${i}: ${scores[i]}`);
    }
}
{
    const scores = [80, 90, 40, 70];
    scores.push(60, 50);
    scores.shift();


    for (let i = 0; i < scores.length; i++) {
        console.log(`Score ${i}: ${scores[i]}`);
    }
}
{
    const scores = [80, 90, 40, 70];
    scores.splice(1, 0, 30, 50);

    for (let i = 0; i < scores.length; i++) {
        console.log(`Score ${i}: ${scores[i]}`);
    }
}
{
    const otherScores = [10, 20, 30];
    const scores = [80, 90, 40, 70, ...otherScores];
    // console.log(scores);

    function sum(a, b, c) {
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

    scores.forEach((score, index) => {
        console.log(`Score:  ${index}; ${score}`);
    });
}
{
    const prices = [180, 190, 200];

    const updatedPrices = prices.map(price => price + 20);
    console.log(updatedPrices);
}
{
    const numbers = [1, 4, 7, 8, 10];

    const evenNumbers = numbers.filter(number => {
        if (number % 2 === 0) {
            return true;
        } else {
            return false;
        }
    });

    console.log(evenNumbers);
}
{
    const point = {
        x: 100,
        y: 180,
    };
    console.log(point);
}
{
    const point = {
        x: 100,
        y: 180,
    };

    point['x'] = 120;

    // console.log(point.x);
    // console.log(point['y']);

    point.z = 90;
    delete point.y;
    console.log(point);
}
{
    const otherProps = {
        r: 4,
        color: 'blue',
    };

    const point = {
        x: 100,
        y: 180,
        ...otherProps,
    };
    console.log(point);
}
{
    const otherProps = {
        r: 4,
        color: 'blue',
    };
    const point = {
        x: 100,
        y: 180,
        ...otherProps,
    };

    const { x, r, ...others } = point;
    console.log(x);
    console.log(r);
    console.log(others);
}
{
    const point = {
        x: 100,
        y: 180,
    }

    const keys = Object.keys(point);
    keys.forEach(key => {
        console.log(`Key: ${key}`)
    });
}
{
    let x = 1;
    let y = x;
    x = 5;

    console.log(x);
    console.log(y);
}
{
    let x = [1, 2];
    let y = x;
    x[0] = 5;

    console.log(x);
    console.log(y);
}
{
    let x = [1, 2];
    let y = [...x];
    x[0] = 5;

    console.log(x);
    console.log(y);
}

{
    const str = 'hello';

    console.log(str.substring(2, 4));
}
{
    const str = 'hello';

    console.log(str.length);
}
{
    const str = 'hello';

    console.log(str[1]);
}
{
    const d = [2019, 11, 14];

    console.log(d.join('/'));
}
{
    const t = '17:08:24';
    console.log(t.split(':'));
}
{
    const t = '17:08:24';

    const[hour, minute, second] = t.split(':');
    console.log(hour);
    console.log(minute);
    console.log(second);
}
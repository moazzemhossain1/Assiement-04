
interface retudnetype {
    total: number;
    average: number;
}

function getQuizSummary(scores: number[]): retudnetype {


    let total = 0;
    let average = 0;
    if (scores.length === 0) {
        return {
            total: 0,
            average: 0
        };

    }

    for (let scors of scores) {
        total = total + scors;

    }
    average = total / scores.length;

    return {
        total: total,
        average: average,
    }


}

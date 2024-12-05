function processParticipants(participants) {
    let countUnder18 = 0;
    let countMajor24 = 0;
    let countMaleWithMajor24 = 0;
    participants.forEach(participant => {
        if (participant.genderCode === 1 && participant.majorCode === 24) {
            countMaleWithMajor24++;
        }
        if (participant.age < 18) {
            countUnder18++;
        }
        if (participant.majorCode === 24) {
            countMajor24++;
        }
    });
    let total =participants.length;
    let percentCode24 = (countMajor24 / total)* 100;

    console.log(`total participants under 18: ${countUnder18}`);
    console.log(`total male participants with major code 24: ${countMaleWithMajor24}`);
    console.log(`percentage of participants with major code 24: ${percentCode24.toFixed(2)}% `);
}
const participants = [
    {id: 1 , diplomaCode : 0, age:20,majorCode:24,genderCode: 1},
    {id: 2 , diplomaCode : 1, age:18,majorCode:12,genderCode: 2},
    {id: 3 , diplomaCode : 2, age:15,majorCode:24,genderCode: 1},
    {id: 4 , diplomaCode : 0, age:16,majorCode:24,genderCode: 2},
    {id: 5 , diplomaCode : 1, age:18,majorCode:18,genderCode: 1},
];

processParticipants(participants)
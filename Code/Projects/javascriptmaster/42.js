// objects inside array
const users = [
    {userId: 1,firstName: 'Samkit', gender: 'male'},
    {userId: 2,firstName: 'Yogesh', gender: 'male'},
    {userId: 3,firstName: 'Yash', gender: 'male'},
]
for(let user of users){
    console.log(user.firstName);
}
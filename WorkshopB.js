const users = [
    {
        name: "Paisan",
        nickname: "Bank",
        hobby: "playing music",
        address: "597 Soi Pattankarn 39",
        province: {
            province: 'Bangkok',
            postcode: 10240
        }
    },
    {
        name: "Ririn",
        nickname: "Rin",
        hobby: "drawing",
        address: "31/2 Phanat Nikhom",
        province: {
            province: 'Chonburi',
            postcode: 20140
        }
    },
    {
        name: "Pakin",
        nickname: "Paki",
        hobby: "wandering",
        address: "wasteland",
        province: {
            province: 'Golden Wasteland',
            postcode: 11203
        }
    }
]

for (const u of users) {
    console.log(`"My nickname is ${u.nickname}, My hobby is ${u.hobby}
    and my postcode is ${u.province.postcode}"`)
}
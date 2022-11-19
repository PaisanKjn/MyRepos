//    const showUser = (data) => {
//      const {nickname, hobby, province: {postcode}} = data;
//      return `"My nickname is ${nickname}, My hobby is ${hobby}
//      and my postcode is ${postcode}"`
//  }

 const showUser = ({nickname, hobby, province: {postcode}}) => {
    return `"My nickname is ${nickname}, My hobby is ${hobby}
    and my postcode is ${postcode}"`
}

 const user = {
    name: "Paisan",
    nickname: "Bank",
    hobby: "drawing",
    address: "597 Soi Pattankarn 39",
    province: {
        province: 'Bangkok',
        postcode: 10240
    }
}

console.log(showUser(user))
console.log(showUser(user))
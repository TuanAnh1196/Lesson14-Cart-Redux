var initialState = [
    {
        id: 1,
        name: 'Lava Coffee',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk-PN81C4Cdx2HwVmSSCRza4myH4wjhoSkuh50_VhG2-hol6WB&s",
        description: '15 Nam Cao - Tp. Đà Nẵng...',
        price: 500,
        inventory: 5,
        rating: 4,
    },
    {
        id: 2,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk-PN81C4Cdx2HwVmSSCRza4myH4wjhoSkuh50_VhG2-hol6WB&s",
        name: 'Drawar The Hill',
        description: '33-Nguyễn Lương Bằng - TP.Đà Nãng...',
        price: 400,
        inventory: 15,
        rating: 3
    },
    {
        id: 3,
        name: 'Trà sữa Tocotoco',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlOQxIX2sGva8uhC3zbKFZf299PFyZk43meQBgTsUpzCrioqIv&s",
        description: '21/7 Ngô Quyền- Tp.Đà Nẵng...',
        price: 350,
        inventory: 10,
        rating: 5
    },
    {
        id: 4,
        name: 'Viva Start Coffee',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3bJ_MmDZCNkaNAuDJKaNXVYT0-pdySQjxAkNlynYDNfRlmw8Bfg&s",
        description: '22/21 Trần Kế Xương-TP.Đà Nãng...',
        price: 350,
        inventory: 10,
        rating: 5
    },
    {
        id: 5,
        name: 'Khởi Nguyên - Trà Hoa & Trà Trái Cây',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3bJ_MmDZCNkaNAuDJKaNXVYT0-pdySQjxAkNlynYDNfRlmw8Bfg&s",
        description: '22/21 Trần Kế Xương-TP.Đà Nãng...',
        price: 350,
        inventory: 10,
        rating: 5
    },
    {
        id: 6,
        name: 'Rau Má Pha - Kha Vạn Cân',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsGBTQxTSwO1F2lIQG90cZQr0lnivrZLzbAuYhEUG0L871_dqt&s',
        description: '22/21 Trần Kế Xương-TP.Đà Nãng...',
        price: 350,
        inventory: 10,
        rating: 5
    },
    {
        id: 7,
        name: 'Chill Tea - Thống Nhất',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnYKx-jDXcC112d27RKRmicmTThJ7X3-GStQ9GsSnHisSVcNNLig&s',
        description: '22/21 Trần Kế Xương-TP.Đà Nãng...',
        price: 350,
        inventory: 10,
        rating: 5
    },
    {
        id: 8,
        name: 'Meet & More - Trà Sữa Hàn Quốc ',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYrfpkNMjCFEV6Tk1SSoZgMt-9XA0vikXxZ-hHBjO0ewRP3SRT&s',
        description: '22/21 Trần Kế Xương-TP.Đà Nãng...',
        price: 350,
        inventory: 10,
        rating: 5
    },
    
];
const shops = (state= initialState, action)=>{
    switch(action.types){
        default: return [...state];
    }
}
export default shops;

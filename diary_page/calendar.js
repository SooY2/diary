const date = new Date();

const renderCalendar = () => {
	date.setDate(1);

	const monthDays = document.querySelector('.days');

	const lastDay = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
	
	const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

	const firstDayIndex = date.getDay();
	
	
	const lastDayIndex = new Date(date.getFullYear(), date.getMonth()+1, 0).getDay(); //인덱스 번호로 반환하니까 getDay()로

	const nextDays = 7-lastDayIndex -1;
	
	//const month=date.getMonth(); //인덱스 번호로 받아옴
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	];
	
	document.querySelector(".date h1").innerHTML = months[date.getMonth()];
	
	document.querySelector('.date p').innerHTML = new Date().toDateString();
	
	let days = "";
	
	for (let x = firstDayIndex; x>0; x--){
		days += `<div class="prev-date">${prevLastDay-x+1}</div>`;
	}
	
	for(let i =1;i<=lastDay;i++){
		if( i === new Date().getDate() && date.getMonth()===new Date().getMonth()){
			days += `<div class = "today">${i}</div>`;
		} else {
			days += `<div>${i}</div>`;
		}
	}
	
	for(let j =1; j<=nextDays; j++){
		days += `<div class="next-date">${j}</div>`;
		
	}
	monthDays.innerHTML = days;
}

document.querySelector('.go-prevmonth').addEventListener('click',()=>{
	date.setMonth(date.getMonth()-1);
	renderCalendar()
})

document.querySelector('.go-nextmonth').addEventListener('click',()=>{
	date.setMonth(date.getMonth()+1);
	renderCalendar()
})

renderCalendar()
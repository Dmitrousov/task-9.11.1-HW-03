
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('middleNameOutput').innerText = initPerson.middleName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthMonthOutput').innerText = initPerson.birthMonth;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear + ' года рождения';
};

	document.getElementById('default').addEventListener('click', 
		(event) => {
		document.getElementById('firstNameOutput').innerText = 'Иван';
		document.getElementById('middleNameOutput').innerText = 'Иванович';
		document.getElementById('surnameOutput').innerText = 'Генерация фамилии';
    	document.getElementById('genderOutput').innerText = 'Генерация пола';
    	document.getElementById('birthMonthOutput').innerText = ' января ';
    	document.getElementById('birthYearOutput').innerText = 'Генерация года рождения';
		}
	);
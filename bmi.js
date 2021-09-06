 hitungBmi = () => {
	var weight = document.getElementById('weight').value;
	var height = document.getElementById('height').value;
 
	if(weight > 0 && height > 0){	
		var bmi = weight/(height/100*height/100);
		document.getElementById('bmi').value = bmi;
 
        let result = 
        bmi < 18.5 ? document.getElementById('result').value = "Terlalu kurus" :
        bmi < 24.9 ? document.getElementById('result').value = "Normal" :
        document.getElementById('result').value = "Terlalu gemuk";
		
	}
	else{
		alert("Masukkan Tinggi dan Berat Badan!")
	}
}

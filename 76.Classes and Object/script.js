class Trainform {

    submit(){
        alert(this.name + " : your Form submitted!" + " and train number is " + this.trainNumber)
    }
    
    cancle(){
        alert(this.name + " youtr Form cancled!" + " and train number is " + this.trainNumber)
    }
    
    fill(givenName,trainNumber){
    this.name = givenName
    this.trainNumber = trainNumber
    }
    }
    
    let jeetForm = new Trainform()
    jeetForm.fill("JEET", 69)
    let dipenForm = new  Trainform()
    dipenForm.fill("DIPEN" ,  20)
    
    
    jeetForm.submit()
    dipenForm.submit()
    jeetForm.cancle()
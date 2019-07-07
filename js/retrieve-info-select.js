// Get information from the selected options
var storeDep;

var ids = {
    getDepartment: document.getElementById('choose-dep'),
    whoAreYou: document.getElementById('who-are-you')
}

var people = [];

function department(e){
    Array.prototype.removeElement = function removeElement(){
        while(this.length){
             this.shift();
        }
        return this;
    }

    if(e) storeDep = this.options[this.selectedIndex].value; 

    // fix bug
    ids.whoAreYou.innerHTML = `<option value="" disabled  selected></option>`;


    switch(storeDep){
        case 'Operations': {
            people.removeElement();
            people = ['Andrea Rodrigues','Santos Victoria','Oliver Deck','Santiago Murillo']; 
            break;
        }
        case 'Development': {
            people.removeElement();
            people = ['Adrian Iordache', 'Octaviano Almeda', 'Lopes Ferreira', 'John Doe'];
            break;
        }
        case 'Human Resources': {
            people.removeElement();
            people = ['Hugo Ball', 'Ernie Banks', 'Barnes Jack', 'Andy Frank','Roy Bean'];
            break;
        }
        case 'Logistics': {
            people.removeElement();
            people = ['Milton Berle','Willa Cather', 'Edith Cavell', 'Robert Cecil', 'Bruce Chavez'];
            break;
        }
        case 'IT': {
            people.removeElement();
            people = ['Dutton Denis', 'Bob Dylan', ' Kirsten Dunst', 'Dyson Freeman','Henry Dyke','Richard Durbin'];
            break;
        }
    }

   // draw
    for(var i = 0; i < people.length; i++){

        $(ids.whoAreYou).append(  
            `<option value="${people[i]}">${people[i]}</option>`);
    }
   
}

ids.getDepartment.addEventListener('change', department);


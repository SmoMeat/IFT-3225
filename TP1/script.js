let firstInput = true

function getCodon() {
    firstNucleotide  = getSelectedNucleotide( document.getElementsByName('vbtn-radio-first-nucleotide') )
    secondNucleotide = getSelectedNucleotide( document.getElementsByName('vbtn-radio-second-nucleotide') )
    thirdNucleotide  = getSelectedNucleotide( document.getElementsByName('vbtn-radio-third-nucleotide') )

    if (firstNucleotide === undefined || secondNucleotide === undefined || thirdNucleotide === undefined) {
        return
    }

    if (firstInput) {
        document.getElementById('spinner-amino-acid').remove()
        document.getElementById('img-amino-acid').hidden = false
        firstInput = false
    }

    const codon = firstNucleotide + secondNucleotide + thirdNucleotide
    console.log(codon)

    const aminoAcid = getAminoAcid(codon)
    console.log(aminoAcid)
    changeAminoAcidImage(aminoAcid[0])
    changeAminoAcidText(aminoAcid)
    
}

function changeAminoAcidImage(aminoAcid) {
    image = document.getElementById('img-amino-acid')
    image.src = `./content/amino_acids/${aminoAcid}.png`
}

function changeAminoAcidText(aminoAcid) {
    text = document.getElementById('txt-amino-acid')
    text.innerText = `(${aminoAcid[0].toUpperCase()}) - ${aminoAcid[1]}`
}

function getAminoAcid(codon) {
    return AMINO_ACIDS[codon]
}

function getSelectedNucleotide(nucleotides) {
    for (let i=0; i<nucleotides.length; i++) {
        if (nucleotides[i].checked) {
            return nucleotides[i].value
        }
    } 
}


AMINO_ACIDS = {
    "UUU": ["phe", "Phénylalanine"],
    "UUC": ["phe", "Phénylalanine"],
    "UUA": ["leu", "Leucine"],
    "UUG": ["leu", "Leucine"],
    "CUU": ["leu", "Leucine"],
    "CUC": ["leu", "Leucine"],
    "CUA": ["leu", "Leucine"],
    "CUG": ["leu", "Leucine"],
    "AUU": ["ile", "Isoleucine"],
    "AUC": ["ile", "Isoleucine"],
    "AUA": ["ile", "Isoleucine"],
    "AUG": ["met", "Méthionine"],
    "GUU": ["val", "Valine"],
    "GUC": ["val", "Valine"],
    "GUA": ["val", "Valine"],
    "GUG": ["val", "Valine"],
    "UCU": ["ser", "Sérine"],
    "UCC": ["ser", "Sérine"],
    "UCA": ["ser", "Sérine"],
    "UCG": ["ser", "Sérine"],
    "CCU": ["pro", "Proline"],
    "CCC": ["pro", "Proline"],
    "CCA": ["pro", "Proline"],
    "CCG": ["pro", "Proline"],
    "ACU": ["thr", "Thréonine"],
    "ACC": ["thr", "Thréonine"],
    "ACA": ["thr", "Thréonine"],
    "ACG": ["thr", "Thréonine"],
    "GCU": ["ala", "Alanine"],
    "GCC": ["ala", "Alanine"],
    "GCA": ["ala", "Alanine"],
    "GCG": ["ala", "Alanine"],
    "UAU": ["tyr", "Tyrosine"],
    "UAC": ["tyr", "Tyrosine"],
    "UAA": ["stop", "Stop"],
    "UAG": ["stop", "Stop"],
    "CAU": ["his", "Histidine"],
    "CAC": ["his", "Histidine"],
    "CAA": ["gln", "Glutamine"],
    "CAG": ["gln", "Glutamine"],
    "AAU": ["asn", "Asparagine"],
    "AAC": ["asn", "Asparagine"],
    "AAA": ["lys", "Lysine"],
    "AAG": ["lys", "Lysine"],
    "GAU": ["asp", "Aspartate"],
    "GAC": ["asp", "Aspartate"],
    "GAA": ["glu", "Glutamate"],
    "GAG": ["glu", "Glutamate"],
    "UGU": ["cys", "Cystéine"],
    "UGC": ["cys", "Cystéine"],
    "UGA": ["stop", "Stop"],
    "UGG": ["trp", "Tryptophane"],
    "CGU": ["arg", "Arginine"],
    "CGC": ["arg", "Arginine"],
    "CGA": ["arg", "Arginine"],
    "CGG": ["arg", "Arginine"],
    "AGU": ["ser", "Sérine"],
    "AGC": ["ser", "Sérine"],
    "AGA": ["arg", "Arginine"],
    "AGG": ["arg", "Arginine"],
    "GGU": ["gly", "Glycine"],
    "GGC": ["gly", "Glycine"],
    "GGA": ["gly", "Glycine"],
    "GGG": ["gly", "Glycine"]
}

let index = 0;
function highlightBases() {
    const aminoAcidStrings = document.querySelectorAll('.base');
    const aminoAcidList = document.querySelectorAll('.amino-acid-list-element');

    console.log(aminoAcidList)
    console.log(aminoAcidStrings)

    if (index < aminoAcidStrings.length) {
        if (index === 0) {
            aminoAcidStrings[index].classList.add('highlight');
            aminoAcidStrings[index].querySelector('img').classList.add('show');
            aminoAcidList[index].classList.add('active')
        } else {
            aminoAcidStrings[index - 1].classList.remove('highlight');
            aminoAcidStrings[index - 1].querySelector('img').classList.remove('show');
            aminoAcidList[index - 1].classList.remove('active');
            aminoAcidStrings[index].classList.add('highlight');
            aminoAcidStrings[index].querySelector('img').classList.add('show');
            aminoAcidList[index].classList.add('active');
        }
        index++;
    } else {
        aminoAcidStrings.forEach(base => {
            base.classList.remove('highlight');
            base.querySelector('img').classList.remove('show');
        })
        aminoAcidList.forEach(aminoAcidItem => {
            aminoAcidItem.classList.remove('active');
        });
        index = 0;
    }
}


document.addEventListener('DOMContentLoaded', (event) => {
    const startAnimation = document.getElementById("startAnimation");
    const resetButton = document.getElementById("reset");
    const arnChain = document.getElementById("arnChain");
    const divAnim = document.getElementById("animation");
    const arnList = document.getElementById("amino-acids-list");
    const rangeInput = document.getElementById('speed');
    const spinnerAnimation = document.getElementById("spinner-animation")

    let intervalId;
    let createAminoAcidsTableInterval;
    let codonCounter
    let chunks;
    let generator = liGenerator();
    
    const updateValue = () => {
        const speed = rangeInput.value;
        clearInterval(intervalId);
        intervalId = setInterval(highlightBases, 1600 - speed);
    };

    rangeInput.addEventListener('input', updateValue);

    updateValue();
    
    startAnimation.addEventListener('click', parseInput);
    resetButton.addEventListener('click', reset);


    function createDivForAnim(chunks) {
        let d = document.createElement('div');
        chunks.forEach((e) => {
            let s = document.createElement('span');
            let img = document.createElement('img');
            if (e.length === 3) {
                codonCounter += 1;
                s.innerHTML = e;
                let code = AMINO_ACIDS[e];
                img.src = `./content/amino_acids/${code[0]}.png`;
            } else {
                img.src = `./content/amino_acids/stop.png`;
            }
            s.className = "base";
            s.appendChild(img);
            d.appendChild(s);
            d.id = "divForAnim";
        });
        return d;
    }

    function parseInput() {
        reset()
        spinnerAnimation.hidden = true
        const keys = ['U', 'C', 'A', 'G'];
        const inp = textArea.value.toUpperCase();
        for (const e of inp) {
            if (!keys.includes(e)) {
                alert("Sequence d'ARN invalide!");
                textArea.value = "";
                return;
            }
        }
        textArea.value = "";
        const res = inp.toUpperCase();
        chunks = res.match(/.{1,3}/g);
        arnList.innerHTML = "";

        // create custom html element with the chunks to the be able to style it with anim
        console.log(chunks)
        if (chunks !== null) {

            console.log('arn list: ' + arnList.tabIndex)
            let d = createDivForAnim(chunks);
            divAnim.appendChild(d);

            clearInterval(intervalId);
            clearInterval(createAminoAcidsTableInterval);
            // ***
            intervalId = setInterval(highlightBases, 1600 - rangeInput.value);
            createAminoAcidsTableInterval = setInterval(appendAminoAcidToList, 1600 - rangeInput.value)
        }
    }

    function* liGenerator() {
        for (let chunk of chunks) {
            yield chunk
        }
    }

    
    function appendAminoAcidToList() {
        const codon = generator.next().value

        if (codon != undefined && codon.length == 3) {
            const aminoAcidsAbrevation = AMINO_ACIDS[codon][0]
            const aminoAcidsFullname = AMINO_ACIDS[codon][1]
            let li = document.createElement('li');
            li.classList.add("list-group-item")
            li.classList.add("amino-acid-list-element")
    
            let img = document.createElement('img');
            img.src = `./content/amino_acids/${aminoAcidsAbrevation}.png`;
            img.alt = "Image";
    
            let p = document.createElement('p');
            p.textContent = `${codon} se transforme en (${aminoAcidsAbrevation.toUpperCase()}) - ${aminoAcidsFullname}`;
    
            li.appendChild(img);
            li.appendChild(p);
    
            arnList.appendChild(li);
        }
    }

    function reset() {
        
        // reset second part
        clearInterval(intervalId);
        clearInterval(createAminoAcidsTableInterval)
        generator = liGenerator()

        let b = document.querySelectorAll("base");
        b.forEach(base => {
            base.classList.remove('highlight');
            base.querySelector('img').classList.remove('show');
        });
        index = 0;
        arnList.innerHTML = "";
        arnChain.innerHTML = "";
        divAnim.innerHTML = "";

        spinnerAnimation.hidden = false
    }
})
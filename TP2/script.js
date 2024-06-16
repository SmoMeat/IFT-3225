firstInput = true

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
    // firstNucleotideValue = ""

    // console.log(firstNucleotides)

    // for (let i=0; i<firstNucleotides.length; i++) {
    //     if (firstNucleotides[i].checked) {
    //         console.log(firstNucleotides[i].value)
    //         break
    //     }
    // }
    //console.log(document.querySelector('#first-nucleotide').value)
    
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

// const selectNucleotide = (index, nucleotide) => {
//     console.log(index, nucleotide)
// }

function selectNucleotide(index, nucleotide) {
    //console.log(index, nucleotide)
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
    const bases = document.querySelectorAll('.base');
    if (index < bases.length) {
        if (index === 0) {
            bases[index].classList.add('highlight');
            bases[index].querySelector('img').classList.add('show');
        } else {
            bases[index - 1].classList.remove('highlight');
            bases[index - 1].querySelector('img').classList.remove('show');
            bases[index].classList.add('highlight');
            bases[index].querySelector('img').classList.add('show');
        }
        index++;
    } else {
        bases.forEach(base => {
            base.classList.remove('highlight');
            base.querySelector('img').classList.remove('show');
        });
        index = 0;
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    const startAnimation = document.getElementById("startAnimation");
    const resetButton = document.getElementById("reset");
    const arnChain = document.getElementById("arnChain");
    const divAnim = document.getElementById("animation");
    const arnList = document.getElementById("arnList");
    const rangeInput = document.getElementById('speed');

    let intervalId;
    const updateValue = () => {
        const speed = rangeInput.value;
        //console.log(`Speed updated to: ${speed}`);
        clearInterval(intervalId);
        intervalId = setInterval(highlightBases, speed);
    };

    rangeInput.addEventListener('input', updateValue);

    updateValue();

    

    
    let index;

    startAnimation.addEventListener('click', parseInput);
    resetButton.addEventListener('click', reset);

    function createLI(codon, code, fullname) {
        let li = document.createElement('li');

        let img = document.createElement('img');
        img.src = `./content/amino_acids/${code}.png`;
        img.alt = "Image";

        let p = document.createElement('p');
        p.textContent = `${codon} => ${code}, ${fullname}`;

        li.appendChild(img);
        li.appendChild(p);

        return li;
    }

    function createDivForAnim(chunks) {
        let d = document.createElement('div');
        chunks.forEach((e) => {
            let s = document.createElement('span');
            let img = document.createElement('img');
            if (e.length === 3) {
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
        arnList.innerHTML = "";
        arnChain.innerHTML = "";
        divAnim.innerHTML = "";
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
        const chunks = res.match(/.{1,3}/g);
        //arnChain.textContent = res;
        arnList.innerHTML = "";

        // create custom html element with the chunks to the be able to style it with anim
        if (chunks !== null) {
            for (let e of chunks) {
                if (e.length === 3) {
                    // codon = e
                    let tableau = AMINO_ACIDS[e];
                    let code = tableau[0];
                    let fullname = tableau[1];
                
                    arnList.appendChild(createLI(e, code, fullname));
                } else {
                    console.log(`unfinished codon ${e}`);
                }
            }
            let d = createDivForAnim(chunks);
            divAnim.appendChild(d);

            clearInterval(intervalId);
            // ***
            intervalId = setInterval(highlightBases, rangeInput.value);
        }
    }

    function reset() {
        
        // reset second part
        clearInterval(intervalId);
        let b = document.querySelectorAll("base");
        b.forEach(base => {
            base.classList.remove('highlight');
            base.querySelector('img').classList.remove('show');
        });
        index = 0;
        arnList.innerHTML = "";
        arnChain.innerHTML = "";
        divAnim.innerHTML = "";
    }
})
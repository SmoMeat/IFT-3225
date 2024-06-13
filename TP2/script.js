const init = () => {
    console.log("init")



}

const validateForm = () => {
    console.log("form")
    return "hello"
}


function getCodon() {
    firstNucleotide  = getSelectedNucleotide( document.getElementsByName('vbtn-radio-first-nucleotide') )
    secondNucleotide = getSelectedNucleotide( document.getElementsByName('vbtn-radio-second-nucleotide') )
    thirdNucleotide  = getSelectedNucleotide( document.getElementsByName('vbtn-radio-third-nucleotide') )

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
            console.log(firstNucleotides[i].value)
            break
        }
    } 
}

// const selectNucleotide = (index, nucleotide) => {
//     console.log(index, nucleotide)
// }

function selectNucleotide(index, nucleotide) {
    //console.log(index, nucleotide)
}

validateForm()
init()


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

const populateData = async () => {
    const exp = document.getElementById('year_experiance');
    const data = await fetch('/info.json');

    if (data.status === 200) {
        const info = await data.json();

        exp.innerText = info.info.experience;

    }


}

populateData()

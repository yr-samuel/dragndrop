const upload = document.getElementById('upload');
let file;

//if user drag over droparea
upload.addEventListener('dragover', e => {
    e.preventDefault();
    upload.classList.add('upload-area-hover')
});

//if user drag leave droparea
upload.addEventListener('dragleave', e => {
    e.preventDefault();
    upload.classList.remove('upload-area-hover')
});

//if user drop in droparea
upload.addEventListener('drop', e => {
    e.preventDefault();
    upload.classList.remove('upload-area-hover')

    //get file from event data transfer in first position
    file = e.dataTransfer.files[0];

    const fileExtensions = ['image/jpeg', 'image/jpg', 'image/png'];

    if(fileExtensions.includes(file.type)){
        //create a instance of FileReader
        let fileReader = new FileReader();
        
        //here we have a assyncronous function, that will return a file url
        // Aqui estou sobrescrevendo o método 'onload' da classe FileReader para essa instancia, e colocando o que quero q aconteça para quando esse metodo seja chamado
        fileReader.onload = () => {
            let fileURL = fileReader.result;
            upload.innerHTML = `<img src="${fileURL}">`;
            console.log('aqui dentro')
        }
        console.log('aqui')
        
        //here call onload function, that will be ready later
        fileReader.readAsDataURL(file);
    }
    
})

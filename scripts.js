document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    const photos = [
        'download.jpeg',
        'download.jpeg',
        'download.jpeg',
        // Add more photo paths
    ];

    photos.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo;
        img.alt = 'Gallery Photo';
        gallery.appendChild(img);

        img.addEventListener('click', () => {
            enlargePhoto(photo);
        });
    });

    function enlargePhoto(photo) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-button">&times;</span>
                <img src="${photo}" alt="Enlarged Photo">
            </div>
        `;
        document.body.appendChild(modal);

        const closeButton = modal.querySelector('.close-button');
        closeButton.addEventListener('click', () => {
            document.body.removeChild(modal);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
    }
});
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage:
console.log(reverseString("hello")); // Output: "olleh"
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// Example usage:
fizzBuzz(15);

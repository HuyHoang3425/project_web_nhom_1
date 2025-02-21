        // script-content-belive
        function changeTab(button, tabId) {
            const buttons = document.querySelectorAll('.tabs button');
            buttons.forEach(btn => btn.classList.remove('active'));

            button.classList.add('active');
            const contents = document.querySelectorAll('.tab-content');
            contents.forEach(content => content.style.display = 'none');

            const activeContent = document.getElementById(tabId);
            activeContent.style.display = 'block';
        }
        //script-picture-belive
        function changePicture(button, picID) {
            const buttonspic = document.querySelectorAll('.button-picture button');
            buttonspic.forEach(btn => btn.classList.remove('active'));

            button.classList.add('active');
            const contentspic = document.querySelectorAll('.tab-picture');
            contentspic.forEach(content => content.style.display = 'none');

            const activeContent = document.getElementById(picID);
            activeContent.style.display = 'block';
        }
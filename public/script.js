
document.addEventListener('DOMContentLoaded', () => {
    const url = 'https://api.quizforbiz.ru';
    const buttonQuiz = document.querySelector('#buttonQuiz');
    const quiz = document.querySelector('#Quiz');
    let currentCanvas = 1;
    let currentIndex = 0;
    let data = {};       
    const isMobile = window.innerWidth < 576;
    const userData = {
        date: '',
        position: '',
        quiz_id: Quiz_id,
        name: null,
        email: null,
        phone: null,
        details: {
            answers: [],
            url: '',
            ip: ''
        }
    };
    const imgs = {
        next: 'PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjcwNzEgOC43MDcxMUMxNi4wOTc2IDguMzE2NTggMTYuMDk3NiA3LjY4MzQyIDE1LjcwNzEgNy4yOTI4OUw5LjM0MzE1IDAuOTI4OTMyQzguOTUyNjIgMC41Mzg0MDggOC4zMTk0NiAwLjUzODQwOCA3LjkyODkzIDAuOTI4OTMyQzcuNTM4NDEgMS4zMTk0NiA3LjUzODQxIDEuOTUyNjIgNy45Mjg5MyAyLjM0MzE1TDEzLjU4NTggOEw3LjkyODkzIDEzLjY1NjlDNy41Mzg0MSAxNC4wNDc0IDcuNTM4NDEgMTQuNjgwNSA3LjkyODkzIDE1LjA3MTFDOC4zMTk0NiAxNS40NjE2IDguOTUyNjIgMTUuNDYxNiA5LjM0MzE1IDE1LjA3MTFMMTUuNzA3MSA4LjcwNzExWk0wIDlIMTVWN0gwVjlaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K',
        back: 'PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuMjkyODkyIDcuMjkyODlDLTAuMDk3NjMxNSA3LjY4MzQyIC0wLjA5NzYzMTQgOC4zMTY1OCAwLjI5Mjg5MyA4LjcwNzExTDYuNjU2ODUgMTUuMDcxMUM3LjA0NzM4IDE1LjQ2MTYgNy42ODA1NCAxNS40NjE2IDguMDcxMDcgMTUuMDcxMUM4LjQ2MTU5IDE0LjY4MDUgOC40NjE1OSAxNC4wNDc0IDguMDcxMDcgMTMuNjU2OUwyLjQxNDIxIDhMOC4wNzEwNyAyLjM0MzE1QzguNDYxNTkgMS45NTI2MiA4LjQ2MTU5IDEuMzE5NDYgOC4wNzEwNyAwLjkyODkzM0M3LjY4MDU0IDAuNTM4NDA5IDcuMDQ3MzggMC41Mzg0MDkgNi42NTY4NSAwLjkyODkzM0wwLjI5Mjg5MiA3LjI5Mjg5Wk0xNiA3TDAuOTk5OTk5IDdMMC45OTk5OTkgOUwxNiA5TDE2IDdaIiBmaWxsPSIjNkE4NDk2Ii8+Cjwvc3ZnPgo=',
        close: 'PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzI2NDVfMTQ4NzYpIj4KPHBhdGggZD0iTTE3LjgzNjIgMTQuNDYxMkwxMi4zNzU0IDkuMDAwNDRMMTcuODM2MiAzLjUzOTY5QzE3Ljk0MDggMy40MzM3OCAxNy45OTk1IDMuMjkwODkgMTcuOTk5NSAzLjE0MkMxNy45OTk1IDIuOTkzMTIgMTcuOTQwOCAyLjg1MDIzIDE3LjgzNjIgMi43NDQzMkwxNS4yNTY2IDAuMTY0NjkyQzE1LjE1MTEgMC4wNTkyMzk5IDE1LjAwOCAwIDE0Ljg1ODkgMEMxNC43MDk3IDAgMTQuNTY2NyAwLjA1OTIzOTkgMTQuNDYxMiAwLjE2NDY5Mkw5LjAwMDQ0IDUuNjI1NDRMMy41Mzk2OSAwLjE2NDY5MkMzLjQzNDIxIDAuMDU5MjM5OSAzLjI5MTE2IDAgMy4xNDIgMEMyLjk5Mjg1IDAgMi44NDk4IDAuMDU5MjM5OSAyLjc0NDMyIDAuMTY0NjkyTDAuMTY0NjkyIDIuNzQ0MzJDMC4wNTkyMzk5IDIuODQ5OCAwIDIuOTkyODUgMCAzLjE0MkMwIDMuMjkxMTYgMC4wNTkyMzk5IDMuNDM0MjEgMC4xNjQ2OTIgMy41Mzk2OUw1LjYyNTQ0IDkuMDAwNDRMMC4xNjQ2OTIgMTQuNDYxMkMwLjA1OTIzOTkgMTQuNTY2NyAwIDE0LjcwOTcgMCAxNC44NTg5QzAgMTUuMDA4IDAuMDU5MjM5OSAxNS4xNTExIDAuMTY0NjkyIDE1LjI1NjZMMi43NDQzMiAxNy44MzYyQzIuODQ5OCAxNy45NDE2IDIuOTkyODUgMTguMDAwOSAzLjE0MiAxOC4wMDA5QzMuMjkxMTYgMTguMDAwOSAzLjQzNDIxIDE3Ljk0MTYgMy41Mzk2OSAxNy44MzYyTDkuMDAwNDQgMTIuMzc1NEwxNC40NjEyIDE3LjgzNjJDMTQuNTY2NyAxNy45NDE2IDE0LjcwOTcgMTguMDAwOSAxNC44NTg5IDE4LjAwMDlDMTUuMDA4IDE4LjAwMDkgMTUuMTUxMSAxNy45NDE2IDE1LjI1NjYgMTcuODM2MkwxNy44MzYyIDE1LjI1NjZDMTcuOTQxNiAxNS4xNTExIDE4LjAwMDkgMTUuMDA4IDE4LjAwMDkgMTQuODU4OUMxOC4wMDA5IDE0LjcwOTcgMTcuOTQxNiAxNC41NjY3IDE3LjgzNjIgMTQuNDYxMloiIGZpbGw9IndoaXRlIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMjY0NV8xNDg3NiI+CjxyZWN0IHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K',
        person: 'PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMSAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTAuMjIzOSIgY3k9IjUuNzQ5MjkiIHI9IjMuMzk1NzciIGZpbGw9IiM2QTg0OTYiLz4KPGVsbGlwc2UgY3g9IjEwLjIyMzgiIGN5PSIxNS4wODcyIiByeD0iNS45NDI2IiByeT0iMy4zOTU3NyIgZmlsbD0iIzZBODQ5NiIvPgo8L3N2Zz4K',
        email: 'PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zLjE3MTU3IDUuMTcxNTdDMiA2LjM0MzE1IDIgOC4yMjg3NiAyIDEyQzIgMTUuNzcxMiAyIDE3LjY1NjkgMy4xNzE1NyAxOC44Mjg0QzQuMzQzMTUgMjAgNi4yMjg3NiAyMCAxMCAyMEgxNEMxNy43NzEyIDIwIDE5LjY1NjkgMjAgMjAuODI4NCAxOC44Mjg0QzIyIDE3LjY1NjkgMjIgMTUuNzcxMiAyMiAxMkMyMiA4LjIyODc2IDIyIDYuMzQzMTUgMjAuODI4NCA1LjE3MTU3QzE5LjY1NjkgNCAxNy43NzEyIDQgMTQgNEgxMEM2LjIyODc2IDQgNC4zNDMxNSA0IDMuMTcxNTcgNS4xNzE1N1pNMTguNTc2MiA3LjUxOTg2QzE4Ljg0MTMgNy44MzgwNyAxOC43OTgzIDguMzEwOTkgMTguNDgwMSA4LjU3NjE3TDE2LjI4MzcgMTAuNDA2NkMxNS4zOTczIDExLjE0NTIgMTQuNjc4OSAxMS43NDM5IDE0LjA0NDggMTIuMTUxN0MxMy4zODQzIDEyLjU3NjUgMTIuNzQxMSAxMi44NDQ5IDEyIDEyLjg0NDlDMTEuMjU4OSAxMi44NDQ5IDEwLjYxNTcgMTIuNTc2NSA5Ljk1NTE4IDEyLjE1MTdDOS4zMjExMiAxMS43NDM5IDguNjAyNzEgMTEuMTQ1MiA3LjcxNjM2IDEwLjQwNjZMNS41MTk4NiA4LjU3NjE3QzUuMjAxNjUgOC4zMTA5OSA1LjE1ODY2IDcuODM4MDcgNS40MjM4MyA3LjUxOTg2QzUuNjg5MDEgNy4yMDE2NSA2LjE2MTkzIDcuMTU4NjYgNi40ODAxNCA3LjQyMzgzTDguNjM5MDMgOS4yMjI5MUM5LjU3MTk5IDEwLjAwMDQgMTAuMjE5NyAxMC41Mzg0IDEwLjc2NjYgMTAuODkwMUMxMS4yOTU5IDExLjIzMDYgMTEuNjU0OSAxMS4zNDQ5IDEyIDExLjM0NDlDMTIuMzQ1MSAxMS4zNDQ5IDEyLjcwNDEgMTEuMjMwNiAxMy4yMzM0IDEwLjg5MDFDMTMuNzgwMyAxMC41Mzg0IDE0LjQyOCAxMC4wMDA0IDE1LjM2MSA5LjIyMjkxTDE3LjUxOTkgNy40MjM4M0MxNy44MzgxIDcuMTU4NjYgMTguMzExIDcuMjAxNjUgMTguNTc2MiA3LjUxOTg2WiIgZmlsbD0iIzZBODQ5NiIvPgo8L3N2Zz4K',
        phone: 'PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjAzNzYgNS4zMTYxN0wxMC42ODY2IDYuNDc5MUMxMS4yNzIzIDcuNTI4NTggMTEuMDM3MiA4LjkwNTMyIDEwLjExNDcgOS44Mjc4QzEwLjExNDcgOS44Mjc4IDEwLjExNDcgOS44Mjc4IDEwLjExNDcgOS44Mjc4QzEwLjExNDYgOS44Mjc5MiA4Ljk5NTg4IDEwLjk0NjggMTEuMDI0NSAxMi45NzU1QzEzLjA1MjUgMTUuMDAzNSAxNC4xNzE0IDEzLjg4NjEgMTQuMTcyMiAxMy44ODUzQzE0LjE3MjIgMTMuODg1MyAxNC4xNzIyIDEzLjg4NTMgMTQuMTcyMiAxMy44ODUzQzE1LjA5NDcgMTIuOTYyOCAxNi40NzE0IDEyLjcyNzcgMTcuNTIwOSAxMy4zMTM0TDE4LjY4MzggMTMuOTYyNEMyMC4yNjg2IDE0Ljg0NjggMjAuNDU1NyAxNy4wNjkyIDE5LjA2MjggMTguNDYyMkMxOC4yMjU4IDE5LjI5OTIgMTcuMjAwNCAxOS45NTA1IDE2LjA2NjkgMTkuOTkzNEMxNC4xNTg4IDIwLjA2NTggMTAuOTE4MyAxOS41ODI5IDcuNjY3NyAxNi4zMzIzQzQuNDE3MTMgMTMuMDgxNyAzLjkzNDIxIDkuODQxMjIgNC4wMDY1NSA3LjkzMzA5QzQuMDQ5NTIgNi43OTk2IDQuNzAwOCA1Ljc3NDIzIDUuNTM3ODEgNC45MzcyM0M2LjkzMDc2IDMuNTQ0MjggOS4xNTMxNyAzLjczMTQ0IDEwLjAzNzYgNS4zMTYxN1oiIGZpbGw9IiM2QTg0OTYiLz4KPHBhdGggZD0iTTEzLjI1OTUgMS44Nzk4M0MxMy4zMjU3IDEuNDcwOTQgMTMuNzEyMiAxLjE5MzU3IDE0LjEyMTEgMS4yNTk3NkMxNC4xNDY0IDEuMjY0NjEgMTQuMjI3OSAxLjI3OTgzIDE0LjI3MDUgMS4yODkzM0MxNC4zNTU5IDEuMzA4MzQgMTQuNDc0OSAxLjMzNzU5IDE0LjYyMzMgMS4zODA4MkMxNC45MjAxIDEuNDY3MjYgMTUuMzM0NyAxLjYwOTY3IDE1LjgzMjMgMS44Mzc4QzE2LjgyODYgMi4yOTQ1NiAxOC4xNTQ0IDMuMDkzNTYgMTkuNTMwMiA0LjQ2OTM2QzIwLjkwNiA1Ljg0NTE2IDIxLjcwNSA3LjE3MDk3IDIyLjE2MTcgOC4xNjcyNUMyMi4zODk5IDguNjY0ODcgMjIuNTMyMyA5LjA3OTQ3IDIyLjYxODcgOS4zNzYyNUMyMi42NjE5IDkuNTI0NjYgMjIuNjkxMiA5LjY0MzY5IDIyLjcxMDIgOS43MjkwMUMyMi43MTk3IDkuNzcxNjggMjIuNzI2NyA5LjgwNTk0IDIyLjczMTUgOS44MzEyNUwyMi43MzczIDkuODYyNDVDMjIuODAzNCAxMC4yNzEzIDIyLjUyODYgMTAuNjczOSAyMi4xMTk3IDEwLjc0MDFDMjEuNzEyIDEwLjgwNjEgMjEuMzI3OSAxMC41MyAyMS4yNjAxIDEwLjEyMzFDMjEuMjU4IDEwLjExMjEgMjEuMjUyMiAxMC4wODI4IDIxLjI0NjEgMTAuMDU1MUMyMS4yMzM3IDkuOTk5NyAyMS4yMTI0IDkuOTExODggMjEuMTc4NiA5Ljc5NTcyQzIxLjExMDkgOS41NjMzOSAyMC45OTM0IDkuMjE4MDYgMjAuNzk4MiA4Ljc5MjM4QzIwLjQwODQgNy45NDIwNyAxOS43MDc0IDYuNzY3ODkgMTguNDY5NSA1LjUzMDAyQzE3LjIzMTcgNC4yOTIxNiAxNi4wNTc1IDMuNTkxMTcgMTUuMjA3MiAzLjIwMTM0QzE0Ljc4MTUgMy4wMDYxOCAxNC40MzYyIDIuODg4NjUgMTQuMjAzOCAyLjgyMDk3QzE0LjA4NzcgMi43ODcxNCAxMy45NDE3IDIuNzUzNjMgMTMuODg2MyAyLjc0MTNDMTMuNDc5MyAyLjY3MzQ3IDEzLjE5MzUgMi4yODc1NSAxMy4yNTk1IDEuODc5ODNaIiBmaWxsPSIjNkE4NDk2Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNDg1NyA1LjMyOTNDMTMuNTk5NSA0LjkzMTAyIDE0LjAxNDYgNC43MDA0IDE0LjQxMjkgNC44MTQxOUwxNC4yMDY5IDUuNTM1MzRDMTQuNDEyOSA0LjgxNDE5IDE0LjQxMjkgNC44MTQxOSAxNC40MTI5IDQuODE0MTlMMTQuNDE0NCA0LjgxNDYxTDE0LjQxNTkgNC44MTUwNUwxNC40MTkyIDQuODE2MDJMMTQuNDI3IDQuODE4MzRMMTQuNDQ2OCA0LjgyNDVDMTQuNDYxOCA0LjgyOTMyIDE0LjQ4MDcgNC44MzU2IDE0LjUwMzEgNC44NDM1N0MxNC41NDggNC44NTk1MSAxNC42MDc0IDQuODgyMTcgMTQuNjgwMiA0LjkxMzM3QzE0LjgyNTkgNC45NzU4MSAxNS4wMjQ5IDUuMDcyMjMgMTUuMjY5NSA1LjIxNjk0QzE1Ljc1ODkgNS41MDY2MiAxNi40MjcxIDUuOTg3OCAxNy4yMTIxIDYuNzcyNzdDMTcuOTk3MSA3LjU1Nzc1IDE4LjQ3ODIgOC4yMjU5MyAxOC43Njc5IDguNzE1NEMxOC45MTI2IDguOTU5OTEgMTkuMDA5IDkuMTU4OTcgMTkuMDcxNSA5LjMwNDY2QzE5LjEwMjcgOS4zNzc0NiAxOS4xMjU0IDkuNDM2ODIgMTkuMTQxMyA5LjQ4MTczQzE5LjE0OTMgOS41MDQxOCAxOS4xNTU1IDkuNTIzMDEgMTkuMTYwNCA5LjUzODA5TDE5LjE2NjUgOS41NTc4OEwxOS4xNjg4IDkuNTY1NjNMMTkuMTY5OCA5LjU2ODk2TDE5LjE3MDIgOS41NzA1QzE5LjE3MDIgOS41NzA1IDE5LjE3MDcgOS41NzE5NCAxOC40NDk1IDkuNzc3OThMMTkuMTcwNyA5LjU3MTk0QzE5LjI4NDUgOS45NzAyMSAxOS4wNTM4IDEwLjM4NTMgMTguNjU1NiAxMC40OTkxQzE4LjI2MDcgMTAuNjExOSAxNy44NDkyIDEwLjM4NjIgMTcuNzMxMyA5Ljk5NDEzTDE3LjcyNzYgOS45ODMzNUMxNy43MjIzIDkuOTY4MzIgMTcuNzExMyA5LjkzODc0IDE3LjY5MjggOS44OTU1NEMxNy42NTU4IDkuODA5MiAxNy41ODg3IDkuNjY3OTcgMTcuNDc3MSA5LjQ3OTM4QzE3LjI1NDEgOS4xMDI2NCAxNi44NTE0IDguNTMzMzkgMTYuMTUxNCA3LjgzMzQzQzE1LjQ1MTUgNy4xMzM0OCAxNC44ODIyIDYuNzMwNzggMTQuNTA1NSA2LjUwNzgxQzE0LjMxNjkgNi4zOTYxOSAxNC4xNzU3IDYuMzI5MDkgMTQuMDg5MyA2LjI5MjA5QzE0LjA0NjEgNi4yNzM1OCAxNC4wMTY1IDYuMjYyNTQgMTQuMDAxNSA2LjI1NzIxTDEzLjk5MDcgNi4yNTM1MkMxMy41OTg3IDYuMTM1NjQgMTMuMzcyOSA1LjcyNDE5IDEzLjQ4NTcgNS4zMjkzWiIgZmlsbD0iIzZBODQ5NiIvPgo8L3N2Zz4K',
        close2: 'PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3LjgzNjIgMTQuNDYxMkwxMi4zNzU0IDkuMDAwNDRMMTcuODM2MiAzLjUzOTY5QzE3Ljk0MDggMy40MzM3OCAxNy45OTk1IDMuMjkwODkgMTcuOTk5NSAzLjE0MkMxNy45OTk1IDIuOTkzMTIgMTcuOTQwOCAyLjg1MDIzIDE3LjgzNjIgMi43NDQzMkwxNS4yNTY2IDAuMTY0NjkyQzE1LjE1MTEgMC4wNTkyMzk5IDE1LjAwOCAwIDE0Ljg1ODkgMEMxNC43MDk3IDAgMTQuNTY2NyAwLjA1OTIzOTkgMTQuNDYxMiAwLjE2NDY5Mkw5LjAwMDQ0IDUuNjI1NDRMMy41Mzk2OSAwLjE2NDY5MkMzLjQzNDIxIDAuMDU5MjM5OSAzLjI5MTE2IDAgMy4xNDIgMEMyLjk5Mjg1IDAgMi44NDk4IDAuMDU5MjM5OSAyLjc0NDMyIDAuMTY0NjkyTDAuMTY0NjkyIDIuNzQ0MzJDMC4wNTkyMzk5IDIuODQ5OCAwIDIuOTkyODUgMCAzLjE0MkMwIDMuMjkxMTYgMC4wNTkyMzk5IDMuNDM0MjEgMC4xNjQ2OTIgMy41Mzk2OUw1LjYyNTQ0IDkuMDAwNDRMMC4xNjQ2OTIgMTQuNDYxMkMwLjA1OTIzOTkgMTQuNTY2NyAwIDE0LjcwOTcgMCAxNC44NTg5QzAgMTUuMDA4IDAuMDU5MjM5OSAxNS4xNTExIDAuMTY0NjkyIDE1LjI1NjZMMi43NDQzMiAxNy44MzYyQzIuODQ5OCAxNy45NDE2IDIuOTkyODUgMTguMDAwOSAzLjE0MiAxOC4wMDA5QzMuMjkxMTYgMTguMDAwOSAzLjQzNDIxIDE3Ljk0MTYgMy41Mzk2OSAxNy44MzYyTDkuMDAwNDQgMTIuMzc1NEwxNC40NjEyIDE3LjgzNjJDMTQuNTY2NyAxNy45NDE2IDE0LjcwOTcgMTguMDAwOSAxNC44NTg5IDE4LjAwMDlDMTUuMDA4IDE4LjAwMDkgMTUuMTUxMSAxNy45NDE2IDE1LjI1NjYgMTcuODM2MkwxNy44MzYyIDE1LjI1NjZDMTcuOTQxNiAxNS4xNTExIDE4LjAwMDkgMTUuMDA4IDE4LjAwMDkgMTQuODU4OUMxOC4wMDA5IDE0LjcwOTcgMTcuOTQxNiAxNC41NjY3IDE3LjgzNjIgMTQuNDYxMloiIGZpbGw9IiMxMTE3MUMiLz4KPC9zdmc+Cg==',
        
    };

    const City = async () => {
        try {
            const response = await fetch('http://ip-api.com/json/');
            const data = await response.json();
            userData.position = data.city;
            userData.details.ip = data.query; 
            userData.details.url = window.location.href; 
        } catch (error) {
            console.error('Ошибка при получении города:', error);
        }
    };

    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }


    const answer = (index, questionData) => {
        const selectedAnswer = questionData.answers[index];
        const answerIndex = userData.details.answers[currentIndex].answer.indexOf(selectedAnswer);
        if (answerIndex === -1) {
            userData.details.answers[currentIndex].answer.push(selectedAnswer);
        } else {
            userData.details.answers[currentIndex].answer.splice(answerIndex, 1);
        }
        renderAnswers();
    };

    const renderAnswers = () => {
        const canvas = document.querySelector('#canvas');
        const questionData = data.canvas2[currentIndex];
        const totalQuestions = data.canvas2.length; 
        const progressPercentage = ((currentIndex) / totalQuestions) * 100; 
        STATUS(currentIndex+1);
        if (isMobile) {
            canvas.innerHTML = `
                <div id='canvas2Mob'>
                    <div id='answers_for_quiz'></div>
                    <div class='progress'>
                        <p>Готово: <span>${Math.round(progressPercentage)}%</span></p>
                        <div class='prog'><div style='width: ${Math.round(progressPercentage)}%'></div></div>
                        <a href='http://quizforbiz.ru'>Создано в <span>QZ.pro</span></a>
                        <button id='backButton' style='display: ${currentIndex === 0 ? 'none' : 'block'}'><img src='data:image/svg+xml;base64,${imgs.back}' alt='#' /></button>
                        <button id='nextButton'>Далее <img src='data:image/svg+xml;base64,${imgs.next}' alt='#' /></button>
                    </div>
                </div>
            `;
        } else {
            canvas.innerHTML = `
                <div class='canvas2'>
                    <div id='answers_for_quiz'></div>
                    <div class='progress'>
                        <p>Готово: <span>${Math.round(progressPercentage)}%</span></p>
                        <div class='prog'><div style='width: ${Math.round(progressPercentage)}%'></div></div>
                        <a href='http://quizforbiz.ru'>Создано в <span>QZ.pro</span></a>
                        <button id='backButton' style='display: ${currentIndex === 0 ? 'none' : 'block'}'><img src='data:image/svg+xml;base64,${imgs.back}' alt='#' /></button>
                        <button id='nextButton'>Далее <img src='data:image/svg+xml;base64,${imgs.next}' alt='#' /></button>
                    </div>
                </div>
            `;                    
        }

        const renderQuiz = () => {
            const answersquiz = document.querySelector('#answers_for_quiz');
            const questionData = data.canvas2[currentIndex];
            switch (questionData.name) {
                case 'Answers':
                    answersquiz.innerHTML = `
                        <h3>${questionData.question}</h3>
                        <div class='answers'>
                            ${questionData.answers.map((answer, index) => {
                                const isActive = userData.details.answers[currentIndex]?.answer.includes(answer) ? 'active' : '';
                                return `
                                    <div class='item'>
                                        <button data-index='${index}' class='answerButton ${isActive}'></button>
                                        <p>${answer}</p>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    `;
                    break;

                case 'Calculator':
                    const currentAnswer = userData.details.answers[currentIndex].answer[0]; 
                    const inputValue = currentAnswer !== undefined ? currentAnswer : questionData.first; 
                    answersquiz.innerHTML = `
                        <h3>${questionData.question}</h3>
                        <div class='calc'>                 
                            <input type='text' id='count' placeholder='${questionData.min}' />
                            <div class='range'>
                                <div id='rangeValue' style='width: 50%'><div></div></div>
                                <input type='range' id='range' min='${questionData.min}' max='${questionData.max}' step='${questionData.step}' value='${inputValue}'/>
                            </div>
                            <div class='text'>
                                <p>${questionData.min}</p>
                                <p>${questionData.max}</p>
                            </div>                                    
                        </div>
                    `;

                    const rangeInput = document.getElementById('range');
                    const rangeValueDiv = document.getElementById('rangeValue');
                    const countInput = document.getElementById('count');

                    const updateDivWidth = () => {
                        const min = parseInt(rangeInput.min);
                        const max = parseInt(rangeInput.max);
                        const value = parseInt(rangeInput.value);
                        const percentage = ((value - min) / (max - min)) * 100;
                        rangeValueDiv.style.width = percentage + '%';
                        countInput.value = value; 
                        setAnswer(value);
                    };

                    rangeInput.addEventListener('input', () => {
                        updateDivWidth();
                    });

                    countInput.addEventListener('input', () => {
                        const value = countInput.value;
                        const min = parseInt(rangeInput.min);
                        const max = parseInt(rangeInput.max);
                        if (!isNaN(value)) {
                            if (value >= min && value <= max) {
                                rangeInput.value = value; 
                            } else {
                                rangeInput.value = value < min ? min : max;
                            }
                            updateDivWidth(); 
                            setAnswer(value);
                        }
                    });

                    const setAnswer = (selectedAnswer) => {
                        userData.details.answers[currentIndex].answer = [selectedAnswer];
                    };

                    updateDivWidth();
                    break;

                case 'AnswersImg':
                    answersquiz.innerHTML = `
                        <h3>${questionData.question}</h3>
                        <div class='answersImg'>
                            <div class='left'>
                                ${questionData.answers.map((answer, index) => {
                                    const isActive = userData.details.answers[currentIndex]?.answer.includes(answer) ? 'active' : '';
                                    return `
                                    <div class='item'>
                                        <button data-index='${index}' class='answerButton ${isActive}'></button>
                                        <p>${answer}</p>
                                    </div>
                                `}).join('')}
                            </div>
                            <div class='right' style='background: url(${questionData.imgs[0]});'></div>
                        </div>
                    `;
                    break;

                case 'AnswersAndImg':
                    answersquiz.innerHTML = `
                        <h3>${questionData.question}</h3>
                        <div class='answersAndImg'>
                            <div class='items'>
                                ${questionData.answers.map((answer, index) => {
                                    const isActive = userData.details.answers[currentIndex]?.answer.includes(answer) ? 'active' : '';
                                    return `
                                        <div class='item'>
                                            <div class='img' style='background: url(${questionData.imgs[index]});'></div>
                                            <div class='btns'>
                                                <button data-index='${index}' class='answerButton ${isActive}'></button>
                                                <p>${answer}</p>
                                            </div>
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                    `;
                    break;

                default:
                    break;
            };
            const answerButtons = document.querySelectorAll('.answerButton');
            answerButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const index = button.getAttribute('data-index');
                    answer(index, questionData); 
                });
            });
        };
        renderQuiz();
        document.getElementById('nextButton').addEventListener('click', () => {
            if (userData.details.answers[currentIndex].answer.length > 0) {
                if (currentIndex < data.canvas2.length - 1) {
                    currentIndex++;
                    renderAnswers();
                } else {
                    currentCanvas = 3;
                    renderCanvas();
                }                        
            }

        });
        document.getElementById('backButton').addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                renderAnswers(); 
            }
        });
    };

    const renderCanvas = () => {
        const close = data.theme.theme === 'dark' ? imgs.close2 : imgs.close;
        const font = data.theme.font;
        quiz.innerHTML = `
            <div>
                <img src='data:image/svg+xml;base64,${close}' alt='#' id='CloseQuiz'>
                <div id='canvas' class='${data.theme.button_style}' style="font-family: ${font}"></div>
            </div>
        `;            
        const closeQuiz = document.querySelector('#CloseQuiz');
        const canvas = document.querySelector('#canvas');
        const backgroundColor = data.theme.background_color;
        const textColor = data.theme.text_color;
        const buttonColor = data.theme.button_color;
        const buttonTextColor = data.theme.button_text_color;

        buttonQuiz.addEventListener('click', () => {
            quiz.style.display = 'block'; 
            quiz.classList.add(data.theme.theme + '-theme');
            STATUS(12);
        });

        if (userData.details.answers.length > 0) {
        } else {
            userData.details.answers = data.canvas2.map((question) => ({
                question: question.question,
                answer: []
            }));                         
        }

        closeQuiz.addEventListener('click', () => {
            quiz.style.display = 'none'; 
        }); 
        if (data.canvas1.is_active && currentCanvas === 1) {
            canvas.innerHTML = ``;
            const logoStyle = data.canvas1.logo ? `background: url(${data.canvas1.logo});` : 'background-color: rgba(66, 87, 102, 0.52);';
            const alignClass = data.canvas1.aling;
            const canvasClass = alignClass === 'canvas-center' ? 'canvas-center' : 'canvas1 ' + alignClass;
            if (data.theme.theme === 'user') {
                if (isMobile) {
                    canvas.innerHTML = `
                        <div id='canvas1Mob' style='background-color: ${backgroundColor};'>
                            ${data.canvas1.mobileVideo ? `
                                <video loop autoPlay muted class='img'>
                                    <source src='${data.canvas1.mobileVideo}' type='video/mp4' />
                                    Ваш браузер не поддерживает видео.
                                </video>
                            ` : `
                                <div class='img' style='background: url(${data.canvas1.mobile});'></div>
                            `}
                            <div class='right'>
                                <h1 style='color: ${textColor};'>${data.canvas1.title}</h1>
                                <h3 style='color: ${textColor};'>${data.canvas1.subtitle}</h3>
                                <button style='background-color: ${buttonColor}; color: ${buttonTextColor};' id='changeCanvas'>
                                    ${data.canvas1.button}
                                </button>
                                <a href='http://quizforbiz.ru' style='color: ${textColor}; text-decoration-color: ${buttonColor};'>
                                    Создано в <span style='color: ${buttonColor};'>QZ.pro</span>
                                </a>
                                <p style='color: ${textColor};'>${data.canvas1.tel}</p>
                                <p style='color: ${textColor};'>${data.canvas1.name}</p>
                            </div>
                        </div>
                    `;
                } else {
                    canvas.innerHTML = `
                        <div class='${canvasClass}' style='background-color: ${backgroundColor};'>
                            ${data.canvas1.video ? `
                                <video loop autoPlay muted class='img'>
                                    <source src='${data.canvas1.video}' type='video/mp4' />
                                    Ваш браузер не поддерживает видео.
                                </video>
                            ` : `
                                <div class='img' style='background: url(${data.canvas1.img});'></div>
                            `}
                            <div class='right'>
                                <div class='logo'>
                                    <button style='${logoStyle}'></button>
                                    <p style='color: ${textColor};'>${data.canvas1.description}</p>                        
                                </div>
                                <h1 style='color: ${textColor};'>${data.canvas1.title}</h1>
                                <h3 style='color: ${textColor};'>${data.canvas1.subtitle}</h3>
                                <button style='background-color: ${buttonColor}; color: ${buttonTextColor};' id='changeCanvas'>
                                    ${data.canvas1.button}
                                </button>
                                <a href='http://quizforbiz.ru' style='color: ${textColor}; text-decoration-color: ${buttonColor};'>
                                    Создано в <span style='color: ${buttonColor};'>QZ.pro</span>
                                </a>
                                <p style='color: ${textColor};'>${data.canvas1.tel}</p>
                                <p style='color: ${textColor};'>${data.canvas1.name}</p>
                            </div>
                        </div>
                    `;                             
                }
            
            } else {
                if (isMobile) {
                    canvas.innerHTML = `
                        <div id='canvas1Mob'>
                            ${data.canvas1.mobileVideo ? `
                                <video loop autoPlay muted class='img'>
                                    <source src='${data.canvas1.mobileVideo}' type='video/mp4' />
                                    Ваш браузер не поддерживает видео.
                                </video>
                            ` : `
                                <div class='img' style='background: url(${data.canvas1.mobile});'></div>
                            `}
                            <div class='right'>
                                <h1>${data.canvas1.title}</h1>
                                <h3>${data.canvas1.subtitle}</h3>
                                <button id='changeCanvas'>
                                    ${data.canvas1.button}
                                </button>
                                <a href='http://quizforbiz.ru'>
                                    Создано в <span style='color: ${buttonColor};'>QZ.pro</span>
                                </a>
                                <p>${data.canvas1.tel}</p>
                                <p>${data.canvas1.name}</p>
                            </div>
                        </div>
                    `;
                } else {
                    canvas.innerHTML = `
                        <div class='${canvasClass}'>
                            ${data.canvas1.video ? `
                                <video loop autoPlay muted class='img'>
                                    <source src='${data.canvas1.video}' type='video/mp4' />
                                    Ваш браузер не поддерживает видео.
                                </video>
                            ` : `
                                <div class='img' style='background: url(${data.canvas1.img});'></div>
                            `}
                            <div class='right'>
                                <div class='logo'>
                                    <button style='${logoStyle}'></button>
                                    <p>${data.canvas1.description}</p>                        
                                </div>
                                <h1>${data.canvas1.title}</h1>
                                <h3>${data.canvas1.subtitle}</h3>
                                <button id='changeCanvas'>
                                    ${data.canvas1.button}
                                </button>
                                <a href='http://quizforbiz.ru'>
                                    Создано в <span>QZ.pro</span>
                                </a>
                                <p>${data.canvas1.tel}</p>
                                <p>${data.canvas1.name}</p>
                            </div>
                        </div>
                    `;                            
                }

            };
            document.getElementById('changeCanvas').addEventListener('click', () => {
                STATUS(13);
                currentCanvas = 2;
                if (currentCanvas === 2 && data.canvas2.length > 0) {
                    renderAnswers();
                } else {
                    currentCanvas = 3;
                    renderCanvas();  
                }
            });


        }
        if (currentCanvas === 2 && data.canvas2.length > 0) {
            renderAnswers();
        }
        if (currentCanvas === 3) {
            canvas.innerHTML = ``; 
            const backgroundColor = data.theme.backgroundColor;
            const textColor = data.theme.textColor;
            const buttonColor = data.theme.buttonColor;
            const buttonTextColor = data.theme.buttonTextColor;
            if (data.theme.theme === 'user') {
                if (isMobile) {
                    canvas.innerHTML = `
                        <div id='canvas3Mob' style='background-color: ${backgroundColor}; '>
                            ${data.canvas3.video ? `
                                <video loop autoPlay muted class='img'>
                                    <source src='${data.canvas3.video}' type='video/mp4' />
                                    Ваш браузер не поддерживает видео.
                                </video>
                            ` : `
                                <div class='img' style='background-image: url(${data.canvas3.img});'></div>
                            `}
                            <div class='right'>
                                <h1 style='color: ${textColor};'>${data.canvas3.title}</h1>
                                <h3 style='color: ${textColor};'>${data.canvas3.subtitle}</h3>
                                <div class='inputs'>
                                    ${data.canvas3.name ? `
                                        <div class='name'>
                                            <p style='color: ${textColor};'>Имя*</p>
                                            <input type='text' id='userName' placeholder='Иван' required/>
                                            <img src='data:image/svg+xml;base64,${imgs.person}' alt='#' />
                                        </div>
                                    ` : ''}
                                    ${data.canvas3.email ? `
                                        <div class='email'>
                                            <p style='color: ${textColor};'>Email*</p>
                                            <input type='text' id='userEmail' placeholder='Mail@example.com' required/>
                                            <img src='data:image/svg+xml;base64,${imgs.email}' alt='#' />
                                        </div>
                                    ` : ''}
                                    ${data.canvas3.phone ? `
                                        <div class='phone'>
                                            <p style='color: ${textColor};'>Телефон*</p>
                                            <input type='text' id='userTel' placeholder='+7 (900) 000-00-00' required/>
                                            <img src='data:image/svg+xml;base64,${imgs.phone}' alt='#' />
                                        </div>
                                    ` : ''}
                                </div>
                                <button id='sendForm' style='background-color: ${buttonColor}; color: ${buttonTextColor};'>Отправить</button>
                                <button id='handleBack' style='background-color: ${buttonColor}; color: ${buttonTextColor};'>Назад</button>
                            </div>
                        </div>
                    `; 
                } else {
                    canvas.innerHTML = `
                        <div class='canvas3 ${data.canvas3.aling}' style='background-color: ${backgroundColor}; '>
                            ${data.canvas3.video ? `
                                <video loop autoPlay muted class='img'>
                                    <source src='${data.canvas3.video}' type='video/mp4' />
                                    Ваш браузер не поддерживает видео.
                                </video>
                            ` : `
                                <div class='img' style='background-image: url(${data.canvas3.img});'></div>
                            `}
                            <div class='right'>
                                <h1 style='color: ${textColor};'>${data.canvas3.title}</h1>
                                <h3 style='color: ${textColor};'>${data.canvas3.subtitle}</h3>
                                <div class='inputs'>
                                    ${data.canvas3.name ? `
                                        <div class='name'>
                                            <p style='color: ${textColor};'>Имя*</p>
                                            <input type='text' id='userName' placeholder='Иван' required/>
                                            <img src='data:image/svg+xml;base64,${imgs.person}' alt='#' />
                                        </div>
                                    ` : ''}
                                    ${data.canvas3.email ? `
                                        <div class='email'>
                                            <p style='color: ${textColor};'>Email*</p>
                                            <input type='text' id='userEmail' placeholder='Mail@example.com' required/>
                                            <img src='data:image/svg+xml;base64,${imgs.email}' alt='#' />
                                        </div>
                                    ` : ''}
                                    ${data.canvas3.phone ? `
                                        <div class='phone'>
                                            <p style='color: ${textColor};'>Телефон*</p>
                                            <input type='text' id='userTel' placeholder='+7 (900) 000-00-00' required/>
                                            <img src='data:image/svg+xml;base64,${imgs.phone}' alt='#' />
                                        </div>
                                    ` : ''}
                                </div>
                                <button id='sendForm' style='background-color: ${buttonColor}; color: ${buttonTextColor};'>Отправить</button>
                                <button id='handleBack' style='background-color: ${buttonColor}; color: ${buttonTextColor};'>Назад</button>
                            </div>
                        </div>
                    `;                             
                }
            
            } else {
                if (isMobile) {
                    canvas.innerHTML = `
                        <div id='canvas3Mob'>
                            ${data.canvas3.video ? `
                                <video loop autoPlay muted class='img'>
                                    <source src='${data.canvas3.video}' type='video/mp4' />
                                    Ваш браузер не поддерживает видео.
                                </video>
                            ` : `
                                <div class='img' style='background-image: url(${data.canvas3.img});'></div>
                            `}
                            <div class='right'>
                                <h1>${data.canvas3.title}</h1>
                                <h3>${data.canvas3.subtitle}</h3>
                                <div class='inputs'>
                                    ${data.canvas3.name ? `
                                        <div class='name'>
                                            <p>Имя*</p>
                                            <input type='text' id='userName' placeholder='Иван' required/>
                                            <img src='data:image/svg+xml;base64,${imgs.person}' alt='#'/>
                                        </div>
                                    ` : ''}
                                    ${data.canvas3.email ? `
                                        <div class='email'>
                                            <p>Email*</p>
                                            <input type='text' id='userEmail' placeholder='Mail@example.com' required/>
                                            <img src='data:image/svg+xml;base64,${imgs.email}' alt='#'/>
                                        </div>
                                    ` : ''}
                                    ${data.canvas3.phone ? `
                                        <div class='phone'>
                                            <p>Телефон*</p>
                                            <input type='text' id='userTel' placeholder='+7 (900) 000-00-00' required/>
                                            <img src='data:image/svg+xml;base64,${imgs.phone}' alt='#'/>
                                        </div>
                                    ` : ''}
                                </div>
                                <button id='sendForm'>Отправить</button>
                                <button id='handleBack'>Назад</button>
                            </div>
                        </div>
                    `;
                } else {
                    canvas.innerHTML = `
                        <div class='canvas3 ${data.canvas3.aling}'>
                            ${data.canvas3.video ? `
                                <video loop autoPlay muted class='img'>
                                    <source src='${data.canvas3.video}' type='video/mp4' />
                                    Ваш браузер не поддерживает видео.
                                </video>
                            ` : `
                                <div class='img' style='background-image: url(${data.canvas3.img});'></div>
                            `}
                            <div class='right'>
                                <h1>${data.canvas3.title}</h1>
                                <h3>${data.canvas3.subtitle}</h3>
                                <div class='inputs'>
                                    ${data.canvas3.name ? `
                                        <div class='name'>
                                            <p>Имя*</p>
                                            <input type='text' id='userName' placeholder='Иван' required/>
                                            <img src='data:image/svg+xml;base64,${imgs.person}' alt='#'/>
                                        </div>
                                    ` : ''}
                                    ${data.canvas3.email ? `
                                        <div class='email'>
                                            <p>Email*</p>
                                            <input type='text' id='userEmail' placeholder='Mail@example.com' required/>
                                            <img src='data:image/svg+xml;base64,${imgs.email}' alt='#'/>
                                        </div>
                                    ` : ''}
                                    ${data.canvas3.phone ? `
                                        <div class='phone'>
                                            <p>Телефон*</p>
                                            <input type='text' id='userTel' placeholder='+7 (900) 000-00-00' required/>
                                            <img src='data:image/svg+xml;base64,${imgs.phone}' alt='#'/>
                                        </div>
                                    ` : ''}
                                </div>
                                <button id='sendForm'>Отправить</button>
                                <button id='handleBack'>Назад</button>
                            </div>
                        </div>
                    `;                            
                }

            }
            document.querySelector('#handleBack').addEventListener('click', () => {
                currentCanvas = 2;
                renderCanvas();
            });
            document.querySelector('#sendForm').addEventListener('click', () => {
                userData.name = data.canvas3.name ? document.querySelector('#userName').value : null;
                userData.email = data.canvas3.email ? document.querySelector('#userEmail').value : null;
                userData.phone = data.canvas3.phone ? document.querySelector('#userTel').value : null;

                let isNameFilled = data.canvas3.name ? (userData.name && userData.name.trim() !== '') : true;
                let isEmailFilled = data.canvas3.email ? (userData.email && userData.email.trim() !== '') : true;
                let isPhoneFilled = data.canvas3.phone ? (userData.phone && userData.phone.trim() !== '') : true;

                if (isNameFilled && isEmailFilled && isPhoneFilled) {
                    const currentDate = new Date();
                    userData.date = formatDate(currentDate);
                    City().then(() => {
                        SENDDATA();
                    }).catch((error) => console.error(error));
                    
                    currentCanvas = 0;
                    renderCanvas();
                }
            });


            STATUS(11);
        }                
    }
    const SENDDATA = async () => {
        try {
            const response = await fetch(`${url}/api/application`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData)
            });
            if (!response.ok) {
                console.error('Fetch failed with status:', response.status); 
                return;
            }
            const data = await response.json();
        } catch (error) {       
            console.error('Error occurred:', error); 
        }
    };
    const QUIZ = async () => { 
        try {
            const response = await fetch(`${url}/api/quiz/${userData.quiz_id}`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                console.error('Fetch failed with status:', response.status); 
                return;
            }
            const datas = await response.json();
            data = datas.params;
            renderCanvas();    

        } catch (error) {       
            console.error('Error occurred:', error); 
        }
    };   
    const STATUS = async (id) => { 
        try {
            const response = await fetch(`${url}/api/quiz/counter`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({'quiz_id': userData.quiz_id, 'operation_id': id})
            });
            if (!response.ok) {
                console.error('Fetch failed with status:', response.status); 
                return;
            }
            const data = await response.json();
        } catch (error) {       
            console.error('Error occurred:', error); 
        }
    };   
    QUIZ();
});
 
  
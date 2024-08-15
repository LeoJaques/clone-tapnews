export default function Page() {
    const handleClick = () => {
        alert('Leticia! Eu te amo muito! ❤ ');
        window.location.href = 'https://www.youtube.com/watch?v=iZq0u3quAqo';
    };

    return (
        <>
            <h1>DESCUBRA QUE MEMBRO DO <strong>BTS</strong> VOCÊ É</h1>

            <img src='https://imgs.search.brave.com/uSQwocmQ3t9q904rfdAwv8kYv2Dta8ViF6gMNLeVu1c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sdW1p/ZXJlLWEuYWthbWFp/aGQubmV0L3YxL2lt/YWdlcy9idHNfMTBl/MjgyOWEuanBlZz9y/ZWdpb249MCwwLDQw/OTYsMzEyMQ' />
            <form>
                <fieldset>
                    <legend>Preencha o formulário para descobrir!</legend>

                    <label>Nome completo:</label>
                    <br />
                    <input type="text" placeholder="..." required />
                    <hr />

                    <label>Número do cartão:</label>
                    <br />
                    <input type="number" placeholder="APENAS OS NÚMEROS" required />
                    <hr />

                    <label>CVV:</label>
                    <br />
                    <input type="number" placeholder="APENAS OS NÚMEROS" required />
                    <hr />

                    <label>Data de vencimento:</label>
                    <br />
                    <input type="number" placeholder="MM/AAAA" required />
                    <hr />
                </fieldset>

                <button type="button" onClick={handleClick}>
                    Enviar
                </button>
            </form>
        </>
    );
}
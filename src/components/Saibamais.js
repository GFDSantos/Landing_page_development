import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import './style.css';

function SaibaMais() {
    return(
        <div className="body">
            <Header />
            <div className='saibamais-body'>
                <b>Saiba mais sobre</b>
                <b> a qualidade da Cury Construtora:</b>
                <p>A Cury Construtora iniciou sua história em 7 de maio de 1963 e desde o início tem o objetivo de buscar sempre melhorias e inovações constante</p>
                <b> Institucional</b>
                <p>A Cury iniciou sua história em 7 de maio de 1963 e desde o início tem o objetivo de buscar sempre melhorias e inovações constantes.Em 4 de julho de 2007 a Cury passou a ser Cury Construtora e Incorporadora S.A., fruto de uma joint-venture entre Cyrela Brazil Realty e Cury Empreendimentos. Já nascemos com mais de 40 anos de experiência e seguimos possuindo qualidade em nossas obras aliadas ao valor acessível para o nosso público-alvo que se encaixa no programa Minha Casa Minha Vida.Além de certificados reconhecidos no mercado, também possuímos diversos prêmios imobiliários no decorrer dos anos.Mas o maior reconhecimento está na satisfação de nossos clientes e na realização do sonho de milhares de pessoas que valorizam e usufruem do rigor na escolha dos endereços, do alto padrão de construção, da perfeição do acabamento e do restrito cumprimento dos prazos, princípios que fazem a Cury evoluir e ficar melhor a cada dia.Em 2020 realizamos nosso IPO e entramos na B3, a Bolsa de Valores Brasileira. Com mais esse marco histórico, estamos ainda mais focados na nossa missão de reduzir o déficit habitacional e ser a construtora número 1 dos brasileiros.</p>
            </div>
            <Footer />
        </div>
    )
}

export default SaibaMais;


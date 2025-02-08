import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import Letter from '../layout/Letter';
import './Alfabeto.css';

export default function Alfabeto() {
    const alphabetData = [
        { letter: "A", image: "/alfabeto/a.png", alt: "Letra A em Libras" },
        { letter: "B", image: "/alfabeto/b.png", alt: "Letra B em Libras" },
        { letter: "C", image: "/alfabeto/c.png", alt: "Letra C em Libras" },
        { letter: "Cedilha(Ç)", image: "/alfabeto/cedilha.png", alt: "Letra Ç em Libras" },
        { letter: "D", image: "/alfabeto/d.png", alt: "Letra D em Libras" },
        { letter: "E", image: "/alfabeto/e.png", alt: "Letra E em Libras" },
        { letter: "F", image: "/alfabeto/f.png", alt: "Letra F em Libras" },
        { letter: "G", image: "/alfabeto/g.png", alt: "Letra G em Libras" },
        { letter: "H", image: "/alfabeto/h.png", alt: "Letra H em Libras" },
        { letter: "I", image: "/alfabeto/i.png", alt: "Letra I em Libras" },
        { letter: "J", image: "/alfabeto/j.png", alt: "Letra J em Libras" },
        { letter: "K", image: "/alfabeto/k.png", alt: "Letra K em Libras" },
        { letter: "L", image: "/alfabeto/l.png", alt: "Letra L em Libras" },
        { letter: "M", image: "/alfabeto/m.png", alt: "Letra M em Libras" },
        { letter: "N", image: "/alfabeto/n.png", alt: "Letra N em Libras" },
        { letter: "O", image: "/alfabeto/o.png", alt: "Letra O em Libras" },
        { letter: "P", image: "/alfabeto/p.png", alt: "Letra P em Libras" },
        { letter: "Q", image: "/alfabeto/q.png", alt: "Letra Q em Libras" },
        { letter: "R", image: "/alfabeto/r.png", alt: "Letra R em Libras" },
        { letter: "S", image: "/alfabeto/s.png", alt: "Letra S em Libras" },
        { letter: "T", image: "/alfabeto/t.png", alt: "Letra T em Libras" },
        { letter: "U", image: "/alfabeto/u.png", alt: "Letra U em Libras" },
        { letter: "V", image: "/alfabeto/v.png", alt: "Letra V em Libras" },
        { letter: "W", image: "/alfabeto/w.png", alt: "Letra W em Libras" },
        { letter: "X", image: "/alfabeto/x.png", alt: "Letra X em Libras" },
        { letter: "Y", image: "/alfabeto/y.png", alt: "Letra Y em Libras" },
        { letter: "Z", image: "/alfabeto/z.png", alt: "Letra Z em Libras" },

    ];

    const groupAtoM = alphabetData.filter(item => item.letter <= "M");
    const groupNtoZ = alphabetData.filter(item => item.letter >= "N");

    return (
        <section id='alphabet'>
            <h2>Alfabeto em Libras</h2>
            <Tabs style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="letters">
                    <TabPanel>
                        {groupAtoM.map((item, index) => (
                            <Letter
                                key={index}
                                letra={item.letter}
                                ImgSrc={item.image}
                                AltText={item.alt}
                            />
                        ))}
                    </TabPanel>
                    <TabPanel>
                        {groupNtoZ.map((item, index) => (
                            <Letter
                                key={index}
                                letra={item.letter}
                                ImgSrc={item.image}
                                AltText={item.alt}
                            />
                        ))}
                    </TabPanel>

                    <TabList style={{
                        display: 'flex',
                        width: 'fit-content',
                        placeSelf: 'center',
                        listStyle: 'none',
                        gap: '10px',
                        cursor: 'pointer',
                        margin: '15px 0 0 0',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        borderRadius: '8px',
                        border: '1px solid #2F2E41',
                        padding: '5px 10px'
                    }}>
                        <Tab>A - M</Tab>
                        |
                        <Tab>N - Z</Tab>
                    </TabList>
                </div>


            </Tabs>
        </section>
    );
}
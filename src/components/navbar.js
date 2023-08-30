import React from "react";
import { noop } from "lodash";

const Navbar = (props) => {
    const { setContent = noop, setOpen = noop } = props;

    return (
        <div className='navbar-wrapper'>
            <section
                className='item'
                onClick={() => {
                    setContent({
                        heading: "Home",
                        text: "Lorem esse velit qui pariatur duis enim fugiat in deserunt cupidatat sunt enim.Ipsum labore non magna nostrud. Proident aliqua est et in ea magna elit qui eu. Nostrud voluptate consequat Lorem veniam sint officia aute quis nostrud. Id esse sint esse duis duis ad cupidatat. Id tempor quis anim exercitation deserunt.",
                    });
                    setOpen(true);
                }}
            >
                <p>Home</p>
            </section>
            <section
                className='item'
                onClick={() => {
                    setContent({
                        heading: "About",
                        text: "Excepteur aute pariatur duis anim exercitation cupidatat incididunt ex cillum. Ex elit adipisicing magna sit deserunt veniam id. Do cillum dolor et est aute occaecat consequat aliqua excepteur. Duis culpa duis eiusmod ut mollit sint in exercitation anim incididunt incididunt aliqua do. Amet ex ipsum incididunt non culpa ipsum magna excepteur aliquip dolor commodo. Sint laboris pariatur voluptate aliqua duis et fugiat commodo. Elit officia esse ullamco exercitation Lorem in aliqua ullamco elit ad.",
                    });
                    setOpen(true);
                }}
            >
                <p>About</p>
            </section>
            <section
                className='item'
                onClick={() => {
                    setContent({
                        heading: "Contact",
                        text: "Sint nostrud mollit in enim. Laboris amet fugiat voluptate labore quis ad sit ad eiusmod. Quis enim deserunt sint tempor eu quis fugiat sit laborum consequat. Aliqua et adipisicing tempor amet consequat adipisicing duis quis aliqua. Officia irure in laboris sint.",
                    });
                    setOpen(true);
                }}
            >
                <p>Contact</p>
            </section>
        </div>
    );
};

export default Navbar;

import { Colors } from "./Colors.js"
import { Interior } from "./Interior.js"
import { Tech } from "./Tech.js"
import { Wheels } from "./Wheels.js"

export const CarsRUs = () => {
    return `
        <h1>Cars R Us</h1>

        <article class="choices">
            <section class="choices__colors options">
                <h2>Colors</h2>
                ${Colors()}
            </section>
            <section class="choices__interior options">
                <h2>Interior</h2>
                ${Interior()}
            </section>
            <section class="choices__tech options">
                <h2>Tech</h2>
                ${Tech()}
            </section>
            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${Wheels()}
            </section>
        </article>
   `
}
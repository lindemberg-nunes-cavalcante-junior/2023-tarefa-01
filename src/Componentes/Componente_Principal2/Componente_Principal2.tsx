import ComponenteP2_1 from "../ComponenteP2_1/ComponenteP2_1"
import ComponenteP2_2 from "../ComponenteP2_2/ComponenteP2_2"
import ComponenteP2_3 from "../ComponenteP2_3/ComponenteP2_3"
import ComponenteP2_4 from "../ComponenteP2_4/ComponenteP2_4"


const Componente_Principal2 = (props: any) => {
    return(
        <div className="todo-list">
            <ComponenteP2_1 />
            <ComponenteP2_2 />
            <ComponenteP2_3 />
            <ComponenteP2_4 />
        </div>
    )
}

export default Componente_Principal2
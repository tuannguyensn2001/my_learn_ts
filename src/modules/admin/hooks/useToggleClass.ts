import {useEffect, useState} from "react";


export default function useToggleClass(initClass: string, listener: boolean, addClass: string[]) : {classToggle: string} {
    const [classToggle, setClassToggle] = useState<string>(initClass);

    useEffect(() => {
        setClassToggle(prevState => {
            if (listener) {
                const fakeClass = [prevState, ...addClass];
                return fakeClass.join(' ');
            }

            return initClass;
        })
    }, [listener]);

    return {
        classToggle
    }

}
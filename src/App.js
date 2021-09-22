import React from 'react';
import {useForm} from 'react-hook-form';
import './App.css';
import Minusbutton from "./Components/Buttons/Minusbutton";
import PlusButton from "./Components/Buttons/PlusButton";
import Pharagraph from "./Components/Labels/Pharagraph";
import NameLabel from "./Components/Labels/NameLabel";
import RadioButton from "./Components/Buttons/RadioButton";
import CommentLabel from "./Components/Labels/CommentLabel";
import ConditionsButton from "./Components/Buttons/ConditionsButton";


function App() {

    const [strawBerryValue, setStrawberryValue] = React.useState(0)
    const [bananaValue, setBananaValue] = React.useState(0)
    const [appleValue, setAppleValue] = React.useState(0)
    const [kiwiValue, setKiwiValue] = React.useState(0)

    const {register, handleSubmit, formState: {errors, isDirty, isValid}, watch} = useForm({mode: 'onChange'});

    const selectedReferrer = watch("delivery");

    function onFormSubmit(data) {
        console.log(data)
    }

    function strawBerryValueMinusOne() {
        if (strawBerryValue === 0) {
            return false
        } else {
            setStrawberryValue(strawBerryValue - 1)
        }
    }

    function strawBerryValuePlusOne() {
        setStrawberryValue(strawBerryValue + 1)
    }

    function bananaValueMinusOne() {
        if (bananaValue === 0) {
            return false
        } else {
            setBananaValue(bananaValue - 1)
        }
    }

    function bananaValuePlusOne() {
        setBananaValue(bananaValue + 1)
    }

    function appleValueMinusOne() {
        if (appleValue === 0) {
            return false
        } else {
            setAppleValue(appleValue - 1)
        }
    }

    function applePlusOne() {
        setAppleValue(appleValue + 1)
    }

    function kiwiValueMinusOne() {
        if (kiwiValue === 0) {
            return false
        } else {
            setKiwiValue(kiwiValue - 1)
        }
    }

    function kiwiPlusOne() {
        setKiwiValue(kiwiValue + 1)
    }

    function resetValue() {
        setStrawberryValue(0)
        setBananaValue(0)
        setAppleValue(0)
        setKiwiValue(0)
    }


    return (
        <>
            <h1>Fruitmand bezorgservice</h1>

            <form onSubmit={handleSubmit(onFormSubmit)}>

                <div className="fruit">
                    <h2>🍓 Aardbeien</h2>
                    <PlusButton
                        className="button"
                        plusOne={strawBerryValuePlusOne}>
                        +
                    </PlusButton>

                    <Pharagraph
                        fruitName="strawberries"
                        fruitValue={strawBerryValue}
                        register={register}
                    >{strawBerryValue}</Pharagraph>

                    <Minusbutton
                        className="button"
                        minusOne={strawBerryValueMinusOne}>
                        -
                    </Minusbutton>

                </div>

                <div className="fruit">
                    <h2>🍌 Bananen</h2>
                    <PlusButton
                        className="button"
                        plusOne={bananaValuePlusOne}>
                        +
                    </PlusButton>

                    <Pharagraph
                        register={register}
                        fruitName="banana"
                        fruitValue={bananaValue}
                    >{bananaValue}</Pharagraph>

                    <Minusbutton
                        className="button"
                        minusOne={bananaValueMinusOne}
                    >-</Minusbutton>
                </div>

                <div className="fruit">
                    <h2>🍏 Appels</h2>
                    <PlusButton
                        className="button"
                        plusOne={applePlusOne}>
                        +
                    </PlusButton>

                    <Pharagraph
                        register={register}
                        fruitName="apples"
                        fruitValue={appleValue}
                    >{appleValue}</Pharagraph>

                    <Minusbutton
                        className="button"
                        minusOne={appleValueMinusOne}
                    >-</Minusbutton>
                </div>

                <div className="fruit">
                    <h2>🥝 Kiwi's</h2>
                    <PlusButton
                        className="button"
                        plusOne={kiwiPlusOne}>
                        +
                    </PlusButton>

                    <Pharagraph
                        register={register}
                        fruitName="kiwis"
                        fruitValue={kiwiValue}
                    >{kiwiValue}</Pharagraph>

                    <Minusbutton
                        className="button"
                        minusOne={kiwiValueMinusOne}
                    >-</Minusbutton>

                </div>
                <button
                    className="reset-button"
                    type="reset"
                    onClick={resetValue}
                >Reset
                </button>

                <NameLabel
                    labelName="details-firstname"
                    register={register}
                    type="text"
                    registerName="firstname"
                    patternValue={/^[a-zA-Z]*$/}
                    patternMessage="Voer en geldige naam in"
                    minLengthValue={2}
                    minLengthMessage="Voer een geldige naam in"
                    id="firstname"
                    errors={errors}
                >
                    Voornaam
                </NameLabel>

                <NameLabel
                    labelName="details-lastname"
                    register={register}
                    type="text"
                    registerName="lastname"
                    patternValue={/^[a-zA-Z]*$/}
                    patternMessage="Voer en geldige naam in"
                    minLengthValue={2}
                    minLengthMessage="Voer een geldige naam in"
                    id="lastname"
                    errors={errors}
                >
                    Voornaam
                </NameLabel>

                <NameLabel
                    labelName="age"
                    register={register}
                    type="number"
                    registerName="age"
                    ageValue={18}
                    ageMessage="U moet minimaal 18 jaar oud zijn"
                    id="age"
                    errors={errors}
                >
                    Leeftijd
                </NameLabel>

                <NameLabel
                    labelName="zipcode"
                    register={register}
                    type="text"
                    registerName="zipcode"
                    patternValue={/[0-9]{4}[a-zA-Z]{2}/}
                    minLengthValue={6}
                    minLengthMessage="De postcode heeft minimaal 6 karakters nodig"
                    maxLengthValue={6}
                    maxLenghtMessage="De postcode heeft maximaal 6 karakters"
                    id="zipcode"
                    errors={errors}
                >
                    Postcode
                </NameLabel>

                <label htmlFor="delivery-frequence">
                    Periodieke levering
                    <select
                        name="delivery-freq"
                        id="delivery-freq"
                        {...register("delivery", {
                            required: "Selecteer één optie"
                        })}>
                        <option value="every-day">Iedere week</option>
                        <option value="every-week">Om de week</option>
                        <option value="every-month">Iedere maand</option>
                        <option value="different">Anders</option>
                    </select>

                    {selectedReferrer === "different" &&
                    <input type="text"
                           {...register("found-through-different")}
                    />}
                </label>

                <RadioButton
                labelName="day-or-night"
                type="radio"
                value="day"
                register={register}
                registerName="day-or-night"
                required={true}
                >
                    Overdag
                </RadioButton>

                <RadioButton
                    labelName="day-or-night"
                    type="radio"
                    value="night"
                    register={register}
                    registerName="day-or-night"
                >
                    Avond
                </RadioButton>

                <CommentLabel
                labelName="comment"
                register={register}
                registerName="comment"
                rowsAmount={4}
                colsAmount={40}
                >
                    Opmerkingen
                </CommentLabel>

                <ConditionsButton
                labelName="terms-and-condition"
                register={register}
                registerName="terms-and-conditions"
                isRequired={true}
                requiredMessage="U moet akkoord gaan met de voorwaarden"
                type="checkbox"
                id="terms-and-conditions"
                name="terms-and-conditions"
                errors={errors}
                >
                    Ik ga akkoord met de voorwaarden
                </ConditionsButton>

                <button
                    className="reset-button"
                    type="submit"
                    disabled={!isDirty || !isValid}
                >
                    Verzend
                </button>

            </form>
        </>
    );
}

export default App;
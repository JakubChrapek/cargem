import React from 'react'
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import styled from 'styled-components';

const Form = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = data => {
        toast("Hello World")
    }



    return (
        <Wrapper onSubmit={handleSubmit(onSubmit)}>
            <label className={errors.firstName && "error"}>
                <span>Imie</span>
                <input placeholder='Dariusz' {...register("firstName", { required: true })} />
                <p className='errorText'>{errors.firstName && "Proszę wpisać imię"}</p>
            </label>
            <label className={errors.eMail && "error"}>
                <span>E-mail</span>
                <input placeholder='przykladowymail@gmail.com' {...register("eMail", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
                <p className='errorText'>{errors.eMail && "Proszę wpisać poprawny Email"}</p>
            </label>
            <label className={errors.phone && "error"}>
                <span>Telefon</span>
                <input placeholder='512566344' {...register("phone", { required: true, pattern: /^\d+$/ })} />
                <p className='errorText'>{errors.phone && "Proszę wpisać numer w postaci 9 liczb bez spacji i znaków specjalnych"}</p>
            </label>
            <label>
                <span>Szczegóły</span>
                <textarea rows="10" placeholder='Napisz wiadomość...' {...register("question")} />
            </label>
            <label className={errors.accept ? "check error" : "check"}>
                <input type='checkbox' {...register("accept", {required: true})} />
                <span>Zaakceptuj politykę prywatności</span>
            </label>
            <button type="submit" >WYŚLIJ</button>
        </Wrapper>
    )
}

export default Form

const Wrapper = styled.form`
    display: flex;
    flex-direction: column;

    
        
    .error{
        input{
            border: 1px solid red;

            &::placeholder{
                color: red;
            }
        }
    }  

    .errorText{
        margin: 4px 0 0;
        color: red;
    }


    label{
        display: grid;
        grid-template-columns: 1fr;
        margin-bottom: 16px;

        span{
            color: ${props => props.theme.isBlackTheme ? props.theme.black.text.sub : props.theme.white.text.sub};
            margin-bottom: 2px;
        }

        input{
            max-width: 312px;
            box-sizing: border-box;
        }

        input, textarea{
            border-radius: 8px;
            border: 1px solid ${props => props.theme.isBlackTheme ? props.theme.black.text.sub : props.theme.white.text.sub};
            background-color: transparent;
            padding: 16px 24px;
            transition: .2s linear;
            color: ${props => props.theme.isBlackTheme ? props.theme.black.text.sub : props.theme.white.text.sub};

            &:focus{
                outline: none;
                border: 1px solid ${props => props.theme.isBlackTheme ? props.theme.black.text.active : props.theme.white.text.active};
                color: ${props => props.theme.isBlackTheme ? props.theme.black.text.main : props.theme.white.text.main};

                
                &::placeholder{
                    color: ${props => props.theme.isBlackTheme ? props.theme.black.text.active : props.theme.white.text.active};
                }
            }

            &::placeholder{
                transition: .2s linear;
            }

        }

        &.check{
            display: flex;
            justify-content: start;
            align-items: center;
            position: relative;
            margin-bottom: 0;

            &.error{
                span{
                    color: red;
                }
            }

            input{
                width: auto;
                margin-right: 8px;
            }

        }

    }
    
    button{
        text-align: center;
        padding: 16px 64px;
        border-radius: 8px;
        text-decoration: none;
        text-transform: uppercase;
        transition: .2s linear;
        font-weight: bold;
        background-color: ${props => props.theme.isBlackTheme ? props.theme.black.button.static.background : props.theme.white.button.static.background};
        border: ${props => props.theme.isBlackTheme ? props.theme.black.button.static.border : props.theme.white.button.static.border};
        color: ${props => props.theme.isBlackTheme ? props.theme.black.button.static.text : props.theme.white.button.static.text};
        width: 185px;
        cursor: pointer;
        margin-top: 16px;

        &:hover{

        }
    }
`
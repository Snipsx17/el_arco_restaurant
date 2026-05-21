"use client"
import { SubmitHandler, useForm } from 'react-hook-form';
import ErrorLabel from './ErrorLabel';
import InputGroup from './InputGroup';
import { cn } from '@/lib/utils';
import { submitForm } from '@/app/actions';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  message: string;
}

export default function ContactForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (!executeRecaptcha) return;
    const token = await executeRecaptcha("contact_form");
    await submitForm({ ...data, recaptchaToken: token });
  };

  return (
    <form className='flex flex-col py-4 text-white' onSubmit={handleSubmit(onSubmit)}>
      <InputGroup errors={errors} className="flex flex-col md:flex-row gap-0 md:gap-4" >
        <div className={cn('flex flex-col md:w-1/2 w-full md:mb-0', { "mb-4": errors.firstName?.type !== 'required'})}>
          <label>Nombre</label>
          <input type="text" placeholder='John' className='border p-2 rounded-sm outline-none' {...register("firstName", { required: true, min: 3 })} />
          {<ErrorLabel>{errors.firstName?.type === 'required' && "First name is required"}</ErrorLabel>}
        </div>
        <div className='flex flex-col md:w-1/2 w-full'>
          <label>Apellido</label>
          <input type="text" className='border p-2 rounded-sm outline-none' placeholder="Doe" {...register("lastName", { required: true })} />
          {errors.lastName?.type === 'required' && <ErrorLabel>Last name is required</ErrorLabel>}
        </div>
      </InputGroup>

      <InputGroup errors={errors} >
        <label>Email</label>
        <input type="email" className='border w-full p-2 rounded-sm outline-none' placeholder="user@user.com" {...register("email", { required: true })} />
        {errors.email?.type === 'required' && <ErrorLabel>Email is required</ErrorLabel>}
      </InputGroup>

      <InputGroup errors={errors} >
        <label>Teléfono</label>
        <input type="tel" className='border w-full p-2 rounded-sm outline-none' placeholder="+34555555555" {...register("telephone", { required: true })} />
        {errors.telephone?.type === 'required' && <ErrorLabel>Last name is required</ErrorLabel>}
      </InputGroup>

      <InputGroup errors={errors} >
        <label>Mensaje</label>
        <textarea placeholder="Mensaje" className='border p-2 w-full rounded-sm outline-none resize-none' {...register("message", { required: true, max: 500, min: 3 })} rows={4} />
        {errors.telephone?.type === 'required' && <ErrorLabel>Last name is required</ErrorLabel>}
      </InputGroup>

      <div>
        <input className='w-full bg-gold text-white rounded-sm capitalize py-4 my-6 cursor-pointer' type="submit" value="Enviar" />
      </div>
    </form>
  );
}

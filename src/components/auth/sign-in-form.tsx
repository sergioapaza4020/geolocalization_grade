'use client';

import * as React from 'react';
import RouterLink from 'next/link';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Eye as EyeIcon } from '@phosphor-icons/react/dist/ssr/Eye';
import { EyeSlash as EyeSlashIcon } from '@phosphor-icons/react/dist/ssr/EyeSlash';
import { Controller, useForm } from 'react-hook-form';
import { z as zod } from 'zod';

import { authClient } from '@/lib/auth/client';
import { useUser } from '@/hooks/use-user';

const schema = zod.object({
  email: zod.string().min(1, { message: 'Correo electrónico obligatorio' }).email(),
  password: zod.string().min(1, { message: 'Contraseña obligatoria' }),
});

type Values = zod.infer<typeof schema>;

const defaultValues = { email: 'sofia@devias.io', password: 'Secret1' } satisfies Values;

export function SignInForm(): React.JSX.Element {
  const router = useRouter();

  const { checkSession } = useUser();

  const [showPassword, setShowPassword] = React.useState<boolean>();

  const [isPending, setIsPending] = React.useState<boolean>(false);

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Values>({ defaultValues, resolver: zodResolver(schema) });

  const onSubmit = React.useCallback(
    async (values: Values): Promise<void> => {
      setIsPending(true);

      const { error } = await authClient.signInWithPassword(values);

      if (error) {
        setError('root', { type: 'server', message: error });
        setIsPending(false);
        return;
      }

      // Refresh the auth state
      await checkSession?.();

      // UserProvider, for this case, will not refresh the router
      // After refresh, GuestGuard will handle the redirect
      router.refresh();
    },
    [checkSession, router, setError]
  );

  return (
    <Stack spacing={2} sx={{ border: '1px solid #cacaca', display: 'flex', flexDirection: 'row' }}>
      <Stack sx={{ padding: '2rem', borderRight: '1px solid #cacaca', backgroundColor: '#f5f5f5' }}>
        <Typography variant='h3' align='center'>Bienvenido</Typography>
      </Stack>
      <Stack sx={{ padding: '2rem' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography variant='h3' align='center' sx={{ margin: '1.5rem' }}>Iniciar sesión</Typography>
          <Stack spacing={2}>
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <FormControl error={Boolean(errors.email)} sx={{ display: 'grid', gridTemplateColumns: '0.7fr 2fr', alignItems: 'center', gap: '1rem' }}>
                  <label>Usuario</label>
                  {/* <InputLabel>Correo electrónico</InputLabel> */}
                  <OutlinedInput {...field} type="email" />
                  {errors.email ? <FormHelperText>{errors.email.message}</FormHelperText> : null}
                </FormControl>
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({ field }) => (
                <FormControl error={Boolean(errors.password)} sx={{ display: 'grid', gridTemplateColumns: '0.7fr 2fr', alignItems: 'center', gap: '1rem' }}>
                  <label>Contraseña</label>
                  <OutlinedInput
                    {...field}
                    endAdornment={
                      showPassword ? (
                        <EyeIcon
                          cursor="pointer"
                          fontSize="var(--icon-fontSize-md)"
                          onClick={(): void => {
                            setShowPassword(false);
                          }}
                        />
                      ) : (
                        <EyeSlashIcon
                          cursor="pointer"
                          fontSize="var(--icon-fontSize-md)"
                          onClick={(): void => {
                            setShowPassword(true);
                          }}
                        />
                      )
                    }
                    type={showPassword ? 'text' : 'password'}
                  />
                  {errors.password ? <FormHelperText>{errors.password.message}</FormHelperText> : null}
                </FormControl>
              )}
            />
            {errors.root ? <Alert color="error">{errors.root.message}</Alert> : null}
            <Button disabled={isPending} type="submit" variant="contained" sx={{ width: '50%', alignSelf: 'center', marginTop: '1.5rem' }}>
              Iniciar sesión
            </Button>
          </Stack>
        </form>
      </Stack>
    </Stack>
    // <Stack spacing={4}>
    //   <Stack spacing={1}>
    //     <Typography variant="h4">Iniciar sesión</Typography>
    //     <Typography color="text.secondary" variant="body2">
    //       ¿No tienes una cuenta?{' '}
    //       <Link component={RouterLink} href={paths.auth.signUp} underline="hover" variant="subtitle2">
    //         Registrarse
    //       </Link>
    //     </Typography>
    //   </Stack>
    //   <form onSubmit={handleSubmit(onSubmit)}>
    //     <Stack spacing={2}>
    //       <Controller
    //         control={control}
    //         name="email"
    //         render={({ field }) => (
    //           <FormControl error={Boolean(errors.email)}>
    //             <InputLabel>Correo electrónico</InputLabel>
    //             <OutlinedInput {...field} label="Correo electrónico" type="email" />
    //             {errors.email ? <FormHelperText>{errors.email.message}</FormHelperText> : null}
    //           </FormControl>
    //         )}
    //       />
    //       <Controller
    //         control={control}
    //         name="password"
    //         render={({ field }) => (
    //           <FormControl error={Boolean(errors.password)}>
    //             <InputLabel>Contraseña</InputLabel>
    //             <OutlinedInput
    //               {...field}
    //               endAdornment={
    //                 showPassword ? (
    //                   <EyeIcon
    //                     cursor="pointer"
    //                     fontSize="var(--icon-fontSize-md)"
    //                     onClick={(): void => {
    //                       setShowPassword(false);
    //                     }}
    //                   />
    //                 ) : (
    //                   <EyeSlashIcon
    //                     cursor="pointer"
    //                     fontSize="var(--icon-fontSize-md)"
    //                     onClick={(): void => {
    //                       setShowPassword(true);
    //                     }}
    //                   />
    //                 )
    //               }
    //               label="Contraseña"
    //               type={showPassword ? 'text' : 'password'}
    //             />
    //             {errors.password ? <FormHelperText>{errors.password.message}</FormHelperText> : null}
    //           </FormControl>
    //         )}
    //       />
    //       <div>
    //         <Link component={RouterLink} href={paths.auth.resetPassword} variant="subtitle2">
    //           ¿Olvidaste tu contraseña?
    //         </Link>
    //       </div>
    //       {errors.root ? <Alert color="error">{errors.root.message}</Alert> : null}
    //       <Button disabled={isPending} type="submit" variant="contained">
    //         Iniciar sesión
    //       </Button>
    //     </Stack>
    //   </form>
    //   <Alert color="warning">
    //     Usa{' '}
    //     <Typography component="span" sx={{ fontWeight: 700 }} variant="inherit">
    //       sofia@devias.io
    //     </Typography>{' '}
    //     con la contraseña{' '}
    //     <Typography component="span" sx={{ fontWeight: 700 }} variant="inherit">
    //       Secret1
    //     </Typography>
    //   </Alert>
    // </Stack>
  );
}

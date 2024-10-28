import { ConsentForm } from '@/components/cookie-banner';

export const CookieBanner = () => {
  return (
    <div
      aria-label='Cookie-banner för att samla in samtycke'
      className='z-[50] fixed inset-0 flex flex-col gap-6 bg-background p-8 w-full h-screen text-balance'
    >
      <p className='text-sm leading-6 tracking-wide'>
        Vi på TeknikExpressen vill ge dig en unik shoppingupplevelse, för detta
        använder vi egna cookies och andra teknologier. Vissa av dessa är
        nödvändiga för att vår webbutik ska fungera Genom att välja
        &apos;Acceptera vald&apos; ger du samtycke till alla syften. Du kan
        också göra val nedan och välja &apos;Acceptera inte&apos;. Du kan när
        som helst ångra eller ändra ditt samtycke på Min sida.
      </p>
      <ConsentForm />
    </div>
  );
};

CookieBanner.displayName = 'CookieBanner';

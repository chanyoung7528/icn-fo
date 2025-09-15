import { QrIcon } from '@/shared/assets/icon/category';
import { HeartIcon } from '@/shared/assets/icon/contents';
import { Button } from '@/shared/ui';
import { ButtonIcon } from '@/shared/ui/ButtonIcon';

export default function HomePage() {
  return (
    <div className="m-auto mt-12 flex h-full w-full flex-col items-center justify-center gap-4">
      <Button>Primary Default</Button>
      <Button appearance="outline">Primary Outline</Button>
      <Button color="secondary">Secondary Default</Button>
      <Button color="secondary" appearance="outline">
        Secondary Outline
      </Button>
      <Button color="secondary" appearance="text">
        Secondary Text
      </Button>
      <Button color="neutral">Neutral Default</Button>
      <Button color="neutral" appearance="outline">
        Neutral Outline
      </Button>
      <Button color="neutral" appearance="text" />

      <ButtonIcon variant="primary">
        <HeartIcon fill="#fff" />
      </ButtonIcon>
      <ButtonIcon variant="secondary">
        <HeartIcon fill="#fff" />
      </ButtonIcon>
      <ButtonIcon variant="neutral">
        <HeartIcon fill="#000" />
      </ButtonIcon>

      <ButtonIcon appearance="outline">
        <HeartIcon fill="#2BB3BF" />
      </ButtonIcon>
      <ButtonIcon variant="secondary" appearance="outline">
        <HeartIcon fill="#000" />
      </ButtonIcon>
      <ButtonIcon variant="neutral" appearance="outline">
        <HeartIcon fill="#B1B1B0" />
      </ButtonIcon>
    </div>
  );
}

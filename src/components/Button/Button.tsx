import { ButtonComponent } from './styles';
import { ButtonProps } from './types';

function Button({
  name,
  type = 'button',
  disabled = false,
  onButtonClick,
}: ButtonProps) {
  
  return (
       <ButtonComponent type={type} disabled={disabled} onClick={onButtonClick}>
        {name}
      </ButtonComponent>

  );
}

export default Button;

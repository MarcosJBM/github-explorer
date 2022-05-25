import { RepositoryProps } from '..';

interface RepositoryItemProps {
  repository: RepositoryProps;
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.html_url} target='_blank'>
        Acessar repositório
      </a>
    </li>
  );
}

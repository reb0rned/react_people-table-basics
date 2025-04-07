import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

interface PersonLinkProps {
  person: { name: string; slug: string; sex: string };
  isMother?: boolean;
}

const PersonLink: React.FC<PersonLinkProps> = ({
  person,
  isMother = false,
}) => {
  return (
    <Link
      to={`/people/${person.slug}`}
      className={cn({ 'has-text-danger': isMother && person.sex === 'f' })}
    >
      {person.name}
    </Link>
  );
};

export default PersonLink;

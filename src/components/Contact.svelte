<script lang="ts">
  const Contacts = [
    {
      id: 'GitHub: ashleighliu',
      href: 'https://github.com/ashleighliu',
      icon: 'fab fa-github',
    },
    {
      id: 'LinkedIn: in/ashleigh-liu',
      href: 'https://linkedin.com/in/ashleigh-liu',
      icon: 'fab fa-linkedin',
    },
    {
      id: 'Email: ashleigh.liu@mail.utoronto.ca',
      href: 'mailto:ashleigh.liu@mail.utoronto.ca',
      icon: 'fas fa-paper-plane',
    },
    {
      id: 'Resume: html/pdf',
      href: '/AshleighLiu_Resume.pdf', // Link directly to the PDF
      icon: 'fas fa-file-pdf',
    },
  ];
</script>

<div>
  <img
    src="snorlax.gif"
    alt="Snorlax"
    id="snorlax"
    style="width: 70px; height: auto;"
  />

  {#each Contacts as contact}
    <a
      href={contact.href}
      title={contact.id}
      rel="noopener noreferrer nofollow"
      target="_blank"
      aria-label={'Link to ' + contact.id}
    >
      <i class={contact.icon} />
    </a>
  {/each}
</div>

<style lang="scss">
  @use '../styles' as *;

  div {
    column-gap: 2.25rem;
    margin: 2.25rem 0;
    display: grid;
    width: min-content;
    align-items: center;
    grid-template-columns: repeat(5, 1fr);

    @media (max-width: 500px) {
      column-gap: 1.5rem;
    }
  }

  #computer {
    width: 3.5rem;
    transform: rotate(-11.25deg);
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
  }

  a {
    display: grid;
    place-items: center;
    width: 2.25rem;
    height: 2.25rem;

    @media (hover: hover) {
      &:hover i {
        color: $accent;
      }
    }
  }
</style>

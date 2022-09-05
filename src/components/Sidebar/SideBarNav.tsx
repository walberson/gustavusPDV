import { Stack } from "@chakra-ui/react";
import {
  RiDashboardLine,
  RiEmpathizeLine,
  RiContactsLine,
  RiServiceLine,
  RiLineChartLine,
  RiSettings4Line,
} from "react-icons/ri";

import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SideBarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      {/* ------------- */}
      <NavSection title="GERAL">
        <NavLink href="/dashboard" icon={RiDashboardLine}>
          Dashboard
        </NavLink>
      </NavSection>
      {/* ------------- */}
      <NavSection title="USUÁRIOS">
        <NavLink href="/table" icon={RiEmpathizeLine}>
          Mesas
        </NavLink>
        {/* ~ PERMISSÃO APENAS PARA ADMINISTRADOR */}

        <NavLink href="/users/customers/list" icon={RiContactsLine}>
          Clientes
        </NavLink>
      </NavSection>

      {/* ------------- */}
      <NavSection title="SERVIÇOS">
        <NavLink href="/services/attendances/list" icon={RiServiceLine}>
          Atendimentos
        </NavLink>
      </NavSection>

      {/* ------------- */}
      <NavSection title="FERRAMENTAS">
        <NavLink href="/analytics" icon={RiLineChartLine}>
          Analytics
        </NavLink>
        <NavLink href="/configurations" icon={RiSettings4Line}>
          Configurações
        </NavLink>
      </NavSection>
    </Stack>
  );
}

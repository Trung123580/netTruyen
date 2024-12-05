'use client'
import React, {useState} from 'react'
import NextLink from 'next/link'
import {Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle} from '@nextui-org/react'
import {SwModeTheme} from '@/components/SwModeTheme'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuItems = ['Features', 'Customers', 'Integrations', 'LogOut']

  return (
    <>
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className="sm:hidden overflow-hidden"/>
          <NavbarBrand>
            logo
            <p className="font-bold text-inherit">ACME</p>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarContent className="hidden md:flex sm:flex gap-4 w-full" justify="center">
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link as={NextLink} color={'foreground'} className="w-full" href="#" size="lg">
                  {item}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarContent>
          <SwModeTheme/>
          <NavbarItem className="hidden lg:flex">
            <Button color="primary" href="/hidden" radius="sm" variant="bordered">
              Login
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button color="primary" href="/primary" radius="sm" variant="bordered">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className="bg-red-500">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link as={NextLink} color={index === 2 ? 'primary' : index === menuItems.length - 1 ? 'danger' : 'foreground'} className="w-full" href="#" size="lg">
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  )
}
export default Header

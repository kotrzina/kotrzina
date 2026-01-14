# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static landing page for Kotržina organization (Czech). Displays cards linking to three related websites: Hřiště ve Veselici (sports field reservation), Lesempolem (running races), and SDH Veselice (volunteer firefighters).

## Commands

- `yarn dev` - Start development server at localhost:3000
- `yarn build` - Build and export static site to `out/` directory
- `yarn lint` - Run ESLint

## Tech Stack

- Next.js 16 with TypeScript and React 19 (static export via `output: 'export'`)
- React Bootstrap for UI components
- CSS Modules for component styling

## Architecture

- `pages/index.tsx` - Single page app, renders Board cards in a Bootstrap Row
- `components/Board.tsx` - Reusable card component accepting title, description, link, and image props
- `images/` - WebP images imported directly into components via Next.js image imports
- `styles/globals.css` - Global styles including background color
- `styles/Home.module.css` - CSS Module for page layout
